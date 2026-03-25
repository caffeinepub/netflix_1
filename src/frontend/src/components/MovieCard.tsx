import { Check, ChevronDown, Play, Plus, ThumbsUp } from "lucide-react";
import type { Title } from "../data/movies";

interface MovieCardProps {
  title: Title;
  onSelect: (title: Title) => void;
  onPlay: (title: Title) => void;
  isInList: boolean;
  onToggleList: (id: string) => void;
  progress?: number;
  index: number;
}

export function MovieCard({
  title,
  onSelect,
  onPlay,
  isInList,
  onToggleList,
  progress,
  index,
}: MovieCardProps) {
  return (
    <div
      className="movie-card group"
      style={{ width: "180px" }}
      data-ocid={`content.item.${index}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[2/3] overflow-hidden rounded">
        <img
          src={title.thumbnail}
          alt={title.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const t = e.currentTarget;
            t.src = `https://picsum.photos/seed/${title.id}/300/450`;
          }}
        />

        {/* Progress bar */}
        {progress !== undefined && progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div
              className="progress-bar h-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Hover overlay */}
        <div className="card-overlay">
          <div className="flex items-center gap-1.5 mb-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlay(title);
              }}
              data-ocid={`content.primary_button.${index}`}
              className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors flex-shrink-0"
            >
              <Play className="h-4 w-4 fill-black text-black ml-0.5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleList(title.id);
              }}
              data-ocid={`content.toggle.${index}`}
              className="h-8 w-8 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-white transition-colors flex-shrink-0"
            >
              {isInList ? (
                <Check className="h-4 w-4 text-white" />
              ) : (
                <Plus className="h-4 w-4 text-white" />
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="h-8 w-8 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-white transition-colors flex-shrink-0"
            >
              <ThumbsUp className="h-3.5 w-3.5 text-white" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(title);
              }}
              className="h-8 w-8 rounded-full border border-muted-foreground/50 flex items-center justify-center hover:border-white transition-colors flex-shrink-0 ml-auto"
            >
              <ChevronDown className="h-4 w-4 text-white" />
            </button>
          </div>

          <p className="text-white font-semibold text-xs leading-tight line-clamp-1">
            {title.title}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-green-400 text-xs font-semibold">
              {title.score}
            </span>
            <span className="text-muted-foreground text-xs">{title.year}</span>
            <span className="border border-muted-foreground/40 text-muted-foreground text-[10px] px-1">
              {title.rating}
            </span>
          </div>
          <div className="flex gap-1 mt-1 flex-wrap">
            {title.genre.slice(0, 2).map((g) => (
              <span key={g} className="text-muted-foreground text-[10px]">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
