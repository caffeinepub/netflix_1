import { useMemo, useState } from "react";
import { ContentRow } from "./components/ContentRow";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MovieModal } from "./components/MovieModal";
import { MyListPage } from "./components/MyListPage";
import { Navbar } from "./components/Navbar";
import { SearchResults } from "./components/SearchResults";
import { VideoPlayer } from "./components/VideoPlayer";
import { categories, titles } from "./data/movies";
import type { Title } from "./data/movies";
import { useMyList } from "./hooks/useMyList";
import { useWatchProgress } from "./hooks/useWatchProgress";

type Page = "home" | "movies" | "shows" | "new" | "mylist";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedTitle, setSelectedTitle] = useState<Title | null>(null);
  const [playingTitle, setPlayingTitle] = useState<Title | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { myList, isInList, toggleList } = useMyList();
  const { getProgress, setTitleProgress, getContinueWatching } =
    useWatchProgress();

  const featuredTitle = titles.find((t) => t.featured) ?? titles[0];

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSearchQuery("");
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q) setCurrentPage("home");
  };

  const handlePlay = (title: Title) => {
    setPlayingTitle(title);
    setSelectedTitle(null);
  };

  const handleSelect = (title: Title) => {
    setSelectedTitle(title);
  };

  // Continue watching list
  const continueWatchingIds = getContinueWatching(titles.map((t) => t.id));
  const continueWatchingTitles = continueWatchingIds
    .map((id) => titles.find((t) => t.id === id))
    .filter(Boolean) as Title[];

  // My List titles
  const myListTitles = useMemo(
    () => titles.filter((t) => myList.includes(t.id)),
    [myList],
  );

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return titles.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.genre.some((g) => g.toLowerCase().includes(q)) ||
        t.cast.some((c) => c.toLowerCase().includes(q)),
    );
  }, [searchQuery]);

  // Page-specific filtered titles
  const pageTitle = useMemo(() => {
    if (currentPage === "movies")
      return titles.filter((t) => t.type === "movie");
    if (currentPage === "shows")
      return titles.filter((t) => t.type === "series");
    if (currentPage === "new")
      return [...titles].sort(() => Math.random() - 0.5);
    return titles;
  }, [currentPage]);

  // If video player is active
  if (playingTitle) {
    return (
      <VideoPlayer
        title={playingTitle}
        initialProgress={getProgress(playingTitle.id)}
        onBack={() => setPlayingTitle(null)}
        onProgressUpdate={setTitleProgress}
      />
    );
  }

  const renderContent = () => {
    // Search mode
    if (searchQuery.trim()) {
      return (
        <SearchResults
          query={searchQuery}
          results={searchResults}
          onSelect={handleSelect}
          onPlay={handlePlay}
          isInList={isInList}
          onToggleList={toggleList}
        />
      );
    }

    // My List page
    if (currentPage === "mylist") {
      return (
        <MyListPage
          titles={myListTitles}
          onSelect={handleSelect}
          onPlay={handlePlay}
          isInList={isInList}
          onToggleList={toggleList}
        />
      );
    }

    // Movies page
    if (currentPage === "movies") {
      return (
        <div className="pt-24 pb-12">
          <div className="px-4 md:px-12 mb-6 max-w-[1200px] mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              Movies
            </h1>
          </div>
          <ContentRow
            label="All Movies"
            titles={pageTitle}
            onSelect={handleSelect}
            onPlay={handlePlay}
            isInList={isInList}
            onToggleList={toggleList}
            rowIndex={0}
          />
        </div>
      );
    }

    // TV Shows page
    if (currentPage === "shows") {
      return (
        <div className="pt-24 pb-12">
          <div className="px-4 md:px-12 mb-6 max-w-[1200px] mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              TV Shows
            </h1>
          </div>
          <ContentRow
            label="All TV Shows"
            titles={pageTitle}
            onSelect={handleSelect}
            onPlay={handlePlay}
            isInList={isInList}
            onToggleList={toggleList}
            rowIndex={0}
          />
        </div>
      );
    }

    // New & Popular
    if (currentPage === "new") {
      return (
        <div className="pt-24 pb-12">
          <div className="px-4 md:px-12 mb-6 max-w-[1200px] mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              New & Popular
            </h1>
          </div>
          <ContentRow
            label="Recently Added"
            titles={pageTitle}
            onSelect={handleSelect}
            onPlay={handlePlay}
            isInList={isInList}
            onToggleList={toggleList}
            rowIndex={0}
          />
        </div>
      );
    }

    // Home page
    return (
      <>
        <HeroSection
          title={featuredTitle}
          isInList={isInList(featuredTitle.id)}
          onToggleList={() => toggleList(featuredTitle.id)}
          onPlay={() => handlePlay(featuredTitle)}
          onMoreInfo={() => handleSelect(featuredTitle)}
        />

        <div className="pb-12 -mt-16 relative z-10">
          {/* Continue Watching */}
          {continueWatchingTitles.length > 0 && (
            <ContentRow
              label="Continue Watching"
              titles={continueWatchingTitles}
              onSelect={handleSelect}
              onPlay={handlePlay}
              isInList={isInList}
              onToggleList={toggleList}
              getProgress={getProgress}
              rowIndex={0}
            />
          )}

          {/* Category rows */}
          {categories.map((cat, idx) => {
            const filtered = cat.filter(titles);
            return (
              <ContentRow
                key={cat.id}
                label={cat.label}
                titles={filtered}
                onSelect={handleSelect}
                onPlay={handlePlay}
                isInList={isInList}
                onToggleList={toggleList}
                rowIndex={idx + 1}
              />
            );
          })}
        </div>

        <Footer />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />

      <main>{renderContent()}</main>

      <MovieModal
        title={selectedTitle}
        isOpen={!!selectedTitle}
        onClose={() => setSelectedTitle(null)}
        onPlay={handlePlay}
        isInList={selectedTitle ? isInList(selectedTitle.id) : false}
        onToggleList={() => selectedTitle && toggleList(selectedTitle.id)}
      />
    </div>
  );
}
