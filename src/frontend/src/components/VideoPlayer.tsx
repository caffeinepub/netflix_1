import {
  ArrowLeft,
  Maximize,
  Pause,
  Play,
  Settings,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Title } from "../data/movies";

interface VideoPlayerProps {
  title: Title;
  initialProgress: number;
  onBack: () => void;
  onProgressUpdate: (id: string, percent: number) => void;
}

export function VideoPlayer({
  title,
  initialProgress,
  onBack,
  onProgressUpdate,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(initialProgress);
  const [showControls, setShowControls] = useState(true);
  const [buffered] = useState(75);
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const hideControlsAfterDelay = useCallback(() => {
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    hideControlsAfterDelay();
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, [hideControlsAfterDelay]);

  // Simulate playback progress
  useEffect(() => {
    if (!playing) {
      if (progressInterval.current) clearInterval(progressInterval.current);
      return;
    }
    progressInterval.current = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 0.1);
        onProgressUpdate(title.id, next);
        return next;
      });
    }, 300);
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [playing, title.id, onProgressUpdate]);

  const handleMouseMove = () => {
    setShowControls(true);
    hideControlsAfterDelay();
  };

  const handleRevealControls = () => {
    setShowControls(true);
    hideControlsAfterDelay();
  };

  const formatTime = (percent: number) => {
    const totalMinutes = title.type === "movie" ? 120 : 45;
    const elapsed = Math.floor((percent / 100) * totalMinutes);
    const h = Math.floor(elapsed / 60);
    const m = elapsed % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:00`;
    return `${m}:00`;
  };

  const totalTime = title.type === "movie" ? "2:00:00" : "0:45:00";

  return (
    <section
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onClick={handleRevealControls}
      onKeyUp={handleRevealControls}
      aria-label="Video player"
    >
      {/* Video placeholder */}
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={title.thumbnail}
          alt={title.title}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src =
              "/assets/generated/hero-banner.dim_1920x1080.jpg";
          }}
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4">
          <div className="text-white/30 text-center">
            <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center mx-auto mb-4">
              {playing ? (
                <Pause className="h-8 w-8 text-white/40" />
              ) : (
                <Play className="h-8 w-8 text-white/40 ml-1" />
              )}
            </div>
            <p className="text-lg font-semibold text-white/50">{title.title}</p>
            <p className="text-sm text-white/30">Preview Mode</p>
          </div>
        </div>
      </div>

      {/* Controls overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              data-ocid="player.button"
              className="text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest">
                Now Playing
              </p>
              <h2 className="text-white font-bold text-lg">{title.title}</h2>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
          {/* Progress bar */}
          <div className="relative h-1.5 rounded-full bg-white/20 mb-4 cursor-pointer group">
            {/* Buffered */}
            <div
              className="absolute h-full rounded-full bg-white/30"
              style={{ width: `${buffered}%` }}
            />
            {/* Played */}
            <div
              className="absolute h-full rounded-full bg-netflix-red"
              style={{ width: `${progress}%` }}
            />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 8px)` }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => {
                const val = Number(e.target.value);
                setProgress(val);
                onProgressUpdate(title.id, val);
              }}
              className="absolute inset-0 opacity-0 cursor-pointer w-full"
              data-ocid="player.input"
            />
          </div>

          {/* Buttons row */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              data-ocid="player.primary_button"
              className="text-white hover:text-white/80 transition-colors"
            >
              {playing ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
            <button
              type="button"
              className="text-white hover:text-white/80 transition-colors"
            >
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="text-white hover:text-white/80 transition-colors"
            >
              <SkipForward className="h-5 w-5" />
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2 group/vol">
              <button
                type="button"
                onClick={() => setMuted(!muted)}
                className="text-white hover:text-white/80 transition-colors"
              >
                {muted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-200">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    setMuted(false);
                  }}
                  className="w-full accent-white cursor-pointer"
                />
              </div>
            </div>

            <div className="text-white/70 text-sm">
              {formatTime(progress)} / {totalTime}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Settings className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
