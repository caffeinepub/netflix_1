import {
  Check,
  Play,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Title } from "../data/movies";

interface MovieModalProps {
  title: Title | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (title: Title) => void;
  isInList: boolean;
  onToggleList: () => void;
}

export function MovieModal({
  title,
  isOpen,
  onClose,
  onPlay,
  isInList,
  onToggleList,
}: MovieModalProps) {
  const [muted, setMuted] = useState(true);

  if (!title) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          data-ocid="modal.dialog"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl"
            style={{ background: "oklch(0.16 0 0)" }}
          >
            {/* Header image */}
            <div className="relative aspect-video w-full">
              <img
                src={title.thumbnail}
                alt={title.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${title.id}/640/360`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

              {/* Controls overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onPlay(title)}
                    data-ocid="modal.primary_button"
                    className="netflix-btn-primary"
                  >
                    <Play className="h-4 w-4 fill-black" />
                    Play
                  </button>
                  <button
                    type="button"
                    onClick={onToggleList}
                    data-ocid="modal.toggle"
                    className="h-9 w-9 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white transition-colors"
                  >
                    {isInList ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <Plus className="h-4 w-4 text-white" />
                    )}
                  </button>
                  <button
                    type="button"
                    className="h-9 w-9 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4 text-white" />
                  </button>
                  <button
                    type="button"
                    className="h-9 w-9 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white transition-colors"
                  >
                    <ThumbsDown className="h-4 w-4 text-white" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setMuted(!muted)}
                  className="h-9 w-9 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white transition-colors"
                >
                  {muted ? (
                    <VolumeX className="h-4 w-4 text-white" />
                  ) : (
                    <Volume2 className="h-4 w-4 text-white" />
                  )}
                </button>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                data-ocid="modal.close_button"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400 font-bold text-sm">
                      {title.score} Rating
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {title.year}
                    </span>
                    <span className="border border-muted-foreground/50 px-1.5 py-0.5 text-xs text-muted-foreground">
                      {title.rating}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {title.duration}
                    </span>
                    {title.type === "series" && title.seasons && (
                      <span className="text-muted-foreground text-sm">
                        {title.seasons} Season{title.seasons > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">
                    {title.description}
                  </p>
                </div>

                <div className="w-44 flex-shrink-0 space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Cast: </span>
                    <span className="text-white">{title.cast.join(", ")}</span>
                  </div>
                  {title.director && (
                    <div>
                      <span className="text-muted-foreground">Director: </span>
                      <span className="text-white">{title.director}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Genres: </span>
                    <span className="text-white">{title.genre.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
