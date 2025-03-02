import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../services/searchService";
import { IGetTVShowsResult } from "../types/searchTypes";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../utils/utils";
import TvSlider from "../components/TvSlider";
import SearchSlider from "../components/SearchSlider";

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

const Subtitle = styled.h6`
  padding-top: 20px;
  font-size: 40px;
  color: ${(props) => props.theme.white.lighter};
`;

export default function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const { data, isPending, isError } = useQuery<IGetTVShowsResult>({
    queryKey: ["collections", keyword],
    queryFn: () => getCollections(keyword),
  });

  return (
    <Wrapper>
      {isPending ? (
        <Loader> Loading...</Loader>
      ) : (
        <>
          <SliderWrapper>
            <Subtitle>Search Results for : {keyword}</Subtitle>
            <SearchSlider data={data} />
          </SliderWrapper>
        </>
      )}
    </Wrapper>
  );
}
