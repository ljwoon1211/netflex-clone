import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getLatestMovies } from "../services/movieService";
import styled from "styled-components";
import { makeImagePath } from "../utils/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import MovieSlider from "../components/MovieSlider";
import { IGetMoviesResult } from "../types/movieTypes";
import useGetMoviesData from "../hooks/useGetMoviesData";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ $bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 60px; */

  // 이렇게 하면 위쪽은 밝고, 아래쪽이 어두운 이미지 형태 백그라운드 만들기 가능
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
`;

const SliderWrapper = styled.div`
  /* position: relative; */
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)<{ $scrollY: number }>`
  position: absolute;
  width: 40vw;
  height: 80vh;
  top: ${(props) => props.$scrollY + 100}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;
const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

const Subtitle = styled.h6`
  font-size: 40px;
  color: ${(props) => props.theme.white.lighter};
`;

export default function Home() {
  const navigate = useNavigate();
  const moviePathMatch: PathMatch<string> | null = useMatch("/movies/:id");

  const {
    latestMovies,
    topRatedMovies,
    upcomingMovies,
    isFetchingLatest,
    isFetchingTopRated,
    isFetchingUpcoming,
  } = useGetMoviesData();

  const { scrollY } = useScroll();

  const onOverlayClick = () => navigate(`/`);
  const clickedMovie =
    moviePathMatch?.params.id &&
    [latestMovies, topRatedMovies, upcomingMovies]
      .flatMap((data) => data?.results || [])
      .find((movie) => String(movie.id) === moviePathMatch.params.id);

  return (
    <Wrapper>
      {isFetchingLatest || isFetchingTopRated || isFetchingUpcoming ? (
        <Loader> Loading...</Loader>
      ) : (
        <>
          <Banner $bgPhoto={makeImagePath(latestMovies?.results[0].backdrop_path || "")}>
            <Title>{latestMovies?.results[0].title}</Title>
            <OverView>{latestMovies?.results[0].overview}</OverView>
            <SliderWrapper>
              <Subtitle>Latest movies</Subtitle>
              <MovieSlider data={latestMovies} />
            </SliderWrapper>
          </Banner>
          <ContentWrapper>
            <Subtitle>Top Rated movies</Subtitle>
            <MovieSlider data={topRatedMovies} />
            <Subtitle>Upcoming movies</Subtitle>
            <MovieSlider data={upcomingMovies} />
          </ContentWrapper>

          <AnimatePresence>
            {moviePathMatch ? (
              <>
                <Overlay onClick={onOverlayClick} exit={{ opacity: 0 }} animate={{ opacity: 1 }} />
                <BigMovie layoutId={moviePathMatch.params.id} $scrollY={scrollY.get()}>
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500",
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
