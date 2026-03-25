import { motion } from "motion/react";
import type { Title } from "../data/movies";
import { MovieCard } from "./MovieCard";

interface MyListPageProps {
  titles: Title[];
  onSelect: (title: Title) => void;
  onPlay: (title: Title) => void;
  isInList: (id: string) => boolean;
  onToggleList: (id: string) => void;
}

export function MyListPage({
  titles,
  onSelect,
  onPlay,
  isInList,
  onToggleList,
}: MyListPageProps) {
  return (
    <div className="pt-24 min-h-screen px-4 md:px-12 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-8">
          My List
        </h1>

        {titles.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="mylist.empty_state"
          >
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Your list is empty
            </h2>
            <p className="text-muted-foreground">
              Add movies and shows to your list by clicking the + button on any
              title
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            data-ocid="mylist.list"
          >
            {titles.map((title, idx) => (
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
