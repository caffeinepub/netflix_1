import { useEffect, useState } from "react";

const STORAGE_KEY = "netflix-my-list";

export function useMyList() {
  const [myList, setMyList] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(myList));
  }, [myList]);

  const isInList = (id: string) => myList.includes(id);

  const toggleList = (id: string) => {
    setMyList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const addToList = (id: string) => {
    setMyList((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromList = (id: string) => {
    setMyList((prev) => prev.filter((x) => x !== id));
  };

  return { myList, isInList, toggleList, addToList, removeFromList };
}
