import { motion } from "motion/react";
import type { Title } from "../data/movies";
import { MovieCard } from "./MovieCard";

interface SearchResultsProps {
  query: string;
  results: Title[];
  onSelect: (title: Title) => void;
  onPlay: (title: Title) => void;
  isInList: (id: string) => boolean;
  onToggleList: (id: string) => void;
}

export function SearchResults({
  query,
  results,
  onSelect,
  onPlay,
  isInList,
  onToggleList,
}: SearchResultsProps) {
  return (
    <div className="pt-24 min-h-screen px-4 md:px-12 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-white text-xl font-semibold mb-6">
          {results.length > 0
            ? `Results for "${query}"`
            : `No results found for "${query}"`}
        </h2>

        {results.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="search.empty_state"
          >
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-muted-foreground text-lg">
              Try searching for a different title
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {results.map((title, idx) => (
              <MovieCard
                key={title.id}
                title={title}
                onSelect={onSelect}
                onPlay={onPlay}
                isInList={isInList(title.id)}
                onToggleList={onToggleList}
                index={idx + 1}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
