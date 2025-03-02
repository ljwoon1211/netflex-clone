import { useQuery } from "@tanstack/react-query";
import { getAiringTvs, getOnTheAirTvs, getPopularTs, getTopLatedTvs } from "../services/tvService";
import {
  IGetAiringTVShowsResult,
  IGetOnTheAirTVShowsResult,
  IGetPopularTVShowsResult,
  IGetTopTVShowsResult,
} from "../types/tvTypes";

const useGetTvsData = () => {
  const onTheAirTvsQuery = useQuery<IGetOnTheAirTVShowsResult>({
    queryKey: ["onTheAir"],
    queryFn: getOnTheAirTvs,
  });

  const airingTvsQuery = useQuery<IGetAiringTVShowsResult>({
    queryKey: ["airingTvs"],
    queryFn: getAiringTvs,
  });

  const popularTvsQuery = useQuery<IGetPopularTVShowsResult>({
    queryKey: ["popularTvs"],
    queryFn: getPopularTs,
  });

  const topRatedTvsQuery = useQuery<IGetTopTVShowsResult>({
    queryKey: ["topRatedTvs"],
    queryFn: getTopLatedTvs,
  });

  return {
    onTheAirTvs: onTheAirTvsQuery.data || null,
    airingTvs: airingTvsQuery.data || null,
    popularTvs: popularTvsQuery.data || null,
    topRatedTvs: topRatedTvsQuery.data || null,
    isFetchingOnTheAir: onTheAirTvsQuery.isFetching, // 개별 `isFetching`
    isFetchingAiring: airingTvsQuery.isFetching,
    isFetchingPopular: popularTvsQuery.isFetching,
    isFetchingTopRated: topRatedTvsQuery.isFetching,

    error:
      onTheAirTvsQuery.error ||
      airingTvsQuery.error ||
      popularTvsQuery.error ||
      topRatedTvsQuery.error,
  };
};

export default useGetTvsData;
