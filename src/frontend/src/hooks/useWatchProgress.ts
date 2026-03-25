import { useEffect, useState } from "react";

const STORAGE_KEY = "netflix-watch-progress";

type ProgressMap = Record<string, number>;

export function useWatchProgress() {
  const [progress, setProgress] = useState<ProgressMap>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const getProgress = (id: string): number => progress[id] ?? 0;

  const setTitleProgress = (id: string, percent: number) => {
    setProgress((prev) => ({
      ...prev,
      [id]: Math.min(100, Math.max(0, percent)),
    }));
  };

  const getContinueWatching = (ids: string[]): string[] =>
    ids.filter((id) => {
      const p = progress[id] ?? 0;
      return p > 0 && p < 100;
    });

  return { getProgress, setTitleProgress, getContinueWatching, progress };
}
