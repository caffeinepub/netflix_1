import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Title } from "../data/movies";
import { MovieCard } from "./MovieCard";

interface ContentRowProps {
  label: string;
  titles: Title[];
  onSelect: (title: Title) => void;
  onPlay: (title: Title) => void;
  isInList: (id: string) => boolean;
  onToggleList: (id: string) => void;
  getProgress?: (id: string) => number;
  rowIndex: number;
}

export function ContentRow({
  label,
  titles,
  onSelect,
  onPlay,
  isInList,
  onToggleList,
  getProgress,
  rowIndex,
}: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    const amount = 600;
    rowRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (titles.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
      className="mb-8 group/row"
    >
      <h2 className="text-white font-bold text-lg md:text-xl mb-3 px-4 md:px-12">
        {label}
      </h2>

      <div className="relative px-4 md:px-12">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 h-full w-10 md:w-12 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity bg-gradient-to-r from-black/70 to-transparent rounded-l"
          data-ocid="row.pagination_prev"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Scrollable row */}
        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-auto content-row-container"
          style={{ scrollbarWidth: "none" }}
        >
          {titles.map((title, idx) => (
            <MovieCard
              key={title.id}
              title={title}
              onSelect={onSelect}
              onPlay={onPlay}
              isInList={isInList(title.id)}
              onToggleList={onToggleList}
              progress={getProgress ? getProgress(title.id) : undefined}
              index={idx + 1}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 h-full w-10 md:w-12 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity bg-gradient-to-l from-black/70 to-transparent rounded-r"
          data-ocid="row.pagination_next"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </motion.section>
  );
}
