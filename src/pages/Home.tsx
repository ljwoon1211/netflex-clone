import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMovies, IGetMoviesResult } from "../services/movieService";
import styled from "styled-components";
import { makeImagePath } from "../utils/utils";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // 이렇게 하면 위쪽은 밝고, 아래쪽이 어두운 이미지 형태 백그라운드 만들기 가능
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -200px;
`;
const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-color: white;
  height: 200px;
  color: white;
  font-size: 66px;
  background-size: cover;
  background-position: center center;
  /* position: relative; */
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const rowVariants = {
  hidden: { x: window.outerWidth + 5 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 5 },
};
const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: "tween",
    },
  },
};

export default function Home() {
  const { data, isFetching } = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: async (): Promise<IGetMoviesResult> => getMovies(),
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<Boolean>(false);

  const increaseIndex = () => {
    if (!data) return;
    if (leaving) return;
    toggleLeaving();
    const totalMovies = data.results.length;
    const maxIndex = Math.ceil(totalMovies / offset);
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const offset = 6; // 페이지네이션 수
  return (
    <Wrapper>
      {isFetching ? (
        <Loader> Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: "1" }}
                key={index}
              >
                {/* key값이 바뀔때마다 Row가 새로 렌더링 */}
                {data?.results
                  .slice(1)
                  // offset 6개 , index 현재 페이지네이션
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      variants={boxVariants}
                      whileHover="hover"
                      initial="normal"
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
