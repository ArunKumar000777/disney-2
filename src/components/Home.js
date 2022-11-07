import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import axios from "../axios";
import { API_KEY } from "../constants/constants";
// import { useState } from 'react'
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`
            )
            .then((response) => {
                let tempMovies = response.data.results;
                dispatch(setMovies(tempMovies));
            });
    }, [dispatch]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &::before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;
