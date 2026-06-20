// archive platforms from useLookupList.tsx
import { useEffect } from "react";
import { useLookupList } from "./useLookupList.tsx";

export function usePlatforms() {
  const { items: platforms, loading, error, fetchList } = useLookupList("platforms");

  useEffect(() => {
    fetchList(); 
  }, [fetchList]);

  return { platforms, loading, error };
}