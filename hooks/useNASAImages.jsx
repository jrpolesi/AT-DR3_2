import { useMemo } from "react";
import { api } from "../api/api";
import { useInfinityQuery } from "./useInfinityQuery";

export function useNASAImages(options) {
  const { data, error, isLoading, pagination } = useInfinityQuery(
    api.getNASAImages,
    options
  );

  const normalizedData = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.map((item) => {
      const { data, links } = item;

      const { href } = links[0];

      const {
        title,
        nasa_id,
        description,
        keywords,
        photographer,
        secondary_creator,
      } = data[0] ?? {};

      return {
        title,
        nasaId: nasa_id,
        href,
        description,
        keywords,
        photographer,
        secondaryCreator: secondary_creator,
      };
    });
  }, [data]);

  return {
    data: normalizedData ?? null,
    error,
    isLoading,
    pagination,
  };
}
