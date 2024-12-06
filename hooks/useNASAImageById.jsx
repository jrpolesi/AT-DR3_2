import { useMemo } from "react";
import { api } from "../api/api";
import { useInfinityQuery } from "./useInfinityQuery";

export function useNASAImages(nasaId) {
  const { data, error, isLoading, pagination } = useInfinityQuery(
    api.getNASAImages,
    { nasa_id: nasaId }
  );

  const normalizedData = useMemo(() => {
    if (!data) {
      return null;
    }

    const { data: itemData, links } = data[0];

    const { title, nasa_id } = itemData[0];

    return {
      title,
      nasaID: nasa_id,
      href: links[0].href,
    };
  }, [data]);

  return {
    data: normalizedData ?? null,
    error,
    isLoading,
    pagination,
  };
}
