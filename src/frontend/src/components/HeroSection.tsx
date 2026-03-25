import { Check, Info, Play, Plus } from "lucide-react";
import { motion } from "motion/react";
import type { Title } from "../data/movies";

interface HeroSectionProps {
  title: Title;
  isInList: boolean;
  onToggleList: () => void;
  onPlay: () => void;
  onMoreInfo: () => void;
}

export function HeroSection({
  title,
  isInList,
  onToggleList,
  onPlay,
  onMoreInfo,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full"
      style={{ height: "85vh", minHeight: "560px" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1920x1080.jpg"
          alt={title.title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 md:px-12 max-w-[1200px] mx-auto">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex gap-2 mb-3">
              {title.genre.map((g) => (
                <span
                  key={g}
                  className="text-xs font-semibold px-2 py-0.5 rounded bg-netflix-red/20 text-netflix-red border border-netflix-red/30"
                >
                  {g}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
              {title.title}
            </h1>

            <div className="flex items-center gap-3 mb-4 text-sm">
              <span className="text-green-400 font-bold">
                {title.score} Rating
              </span>
              <span className="text-muted-foreground">{title.year}</span>
              <span className="border border-muted-foreground/50 px-1.5 py-0.5 text-xs text-muted-foreground">
                {title.rating}
              </span>
              <span className="text-muted-foreground">{title.duration}</span>
            </div>

            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
              {title.description}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onPlay}
                data-ocid="hero.primary_button"
                className="netflix-btn-primary"
              >
                <Play className="h-5 w-5 fill-black" />
                Play
              </button>
              <button
                type="button"
                onClick={onToggleList}
                data-ocid="hero.secondary_button"
                className="netflix-btn-secondary"
              >
                {isInList ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
                My List
              </button>
              <button
                type="button"
                onClick={onMoreInfo}
                data-ocid="hero.button"
                className="netflix-btn-secondary"
              >
                <Info className="h-5 w-5" />
                More Info
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
