import { useQuery } from "@tanstack/react-query";
import { getLatestMovies, getTopLatedMovies, getUpcomingMovies } from "../services/movieService";
import { IGetMoviesResult, IGetTopLatedMovies, IGetUpcomingMovies } from "../types/movieTypes";

const useGetMoviesData = () => {
  const latestMoviesQuery = useQuery<IGetMoviesResult>({
    queryKey: ["latestMovies", "nowPlaying"],
    queryFn: getLatestMovies,
  });

  const topRatedMoviesQuery = useQuery<IGetTopLatedMovies>({
    queryKey: ["topRatedMovies", "topRated"],
    queryFn: getTopLatedMovies,
  });

  const upcomingMoviesQuery = useQuery<IGetUpcomingMovies>({
    queryKey: ["upcomingMovies", "upcoming"],
    queryFn: getUpcomingMovies,
  });

  return {
    latestMovies: latestMoviesQuery.data || null,
    topRatedMovies: topRatedMoviesQuery.data || null,
    upcomingMovies: upcomingMoviesQuery.data || null,
    isFetchingLatest: latestMoviesQuery.isFetching, // 개별 `isFetching`
    isFetchingTopRated: topRatedMoviesQuery.isFetching,
    isFetchingUpcoming: upcomingMoviesQuery.isFetching,
    error: latestMoviesQuery.error || topRatedMoviesQuery.error || upcomingMoviesQuery.error,
  };
};

export default useGetMoviesData;
