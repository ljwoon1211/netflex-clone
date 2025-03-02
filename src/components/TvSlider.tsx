import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { makeImagePath } from "../utils/utils";

import {
  IGetAiringTVShowsResult,
  IGetOnTheAirTVShowsResult,
  IGetPopularTVShowsResult,
  IGetTopTVShowsResult,
} from "../types/tvTypes";
import { IGetTVShowsResult } from "../types/searchTypes";

const SLIDE_OFFSET = 6; // 페이지네이션 개수

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  margin-bottom: 5px;
  grid-template-columns: repeat(${SLIDE_OFFSET}, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ $bgPhoto: string }>`
  ${({ $bgPhoto }) => css`
    background: url(${$bgPhoto}) center/cover no-repeat, white;
  `}
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${({ theme }) => theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const ArrowButton = styled.div<{ $left: boolean }>`
  position: absolute;
  ${({ $left }) => ($left ? "left: 0;" : "right: 0;")}
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out, fill 0.2s ease-in-out;
  }

  &:hover svg {
    fill: white;
    opacity: 1;
  }
`;

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -80,
    transition: { delay: 0.5, duration: 0.1, type: "tween" },
  },
};

const rowVariants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? window.outerWidth + 5 : -window.outerWidth - 5,
  }),
  visible: { x: 0 },
  exit: (direction: number) => ({
    x: direction > 0 ? -window.outerWidth - 5 : window.outerWidth + 5,
  }),
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.1, type: "tween" },
  },
};

interface TvSliderProps {
  data?:
    | IGetAiringTVShowsResult
    | IGetOnTheAirTVShowsResult
    | IGetPopularTVShowsResult
    | IGetTopTVShowsResult
    | IGetTVShowsResult
    | null;
}

const TvSlider: React.FC<TvSliderProps> = ({ data }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const onBoxClicked = (tvId: number) => navigate(`/tvs/${tvId}`);

  const changeIndex = (newDirection: number) => {
    if (!data) return;
    setDirection(newDirection);
    setIndex((prev) => {
      const maxIndex = Math.ceil(data.results.length / SLIDE_OFFSET) - 1;
      return newDirection > 0
        ? prev === maxIndex
          ? 0
          : prev + 1
        : prev === 0
        ? maxIndex
        : prev - 1;
    });
  };

  return (
    <Slider>
      <AnimatePresence custom={direction} initial={false}>
        <Row
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          key={index}
          custom={direction}
        >
          {data?.results
            .slice(1)
            .slice(index * SLIDE_OFFSET, (index + 1) * SLIDE_OFFSET)
            .map((tv) => (
              <Box
                layoutId={String(tv.id)}
                key={tv.id}
                variants={boxVariants}
                whileHover="hover"
                initial="normal"
                transition={{ type: "tween" }}
                $bgPhoto={makeImagePath(tv.backdrop_path, "w500")}
                onClick={() => onBoxClicked(tv.id)}
              >
                <Info variants={infoVariants}>
                  <h4>{tv.name}</h4>
                </Info>
              </Box>
            ))}
        </Row>
      </AnimatePresence>

      <ArrowButton $left={true} onClick={() => changeIndex(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z" />
        </svg>
      </ArrowButton>

      <ArrowButton $left={false} onClick={() => changeIndex(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z" />
        </svg>
      </ArrowButton>
    </Slider>
  );
};

export default TvSlider;
