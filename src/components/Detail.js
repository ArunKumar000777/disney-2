import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/constants";

function Detail() {
    const { id } = useParams();

    const [filteredMovieById, setFilteredMovieById] = useState(null);
    const [movieTitle, setMovieTitle] = useState();
    const [movieDiscription, setMovieDiscription] = useState(null);
    // console.log(movieDiscription);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`
            )
            .then((response) => {
                const data = response.data.results;
                // console.log(data);
                let daa = data.filter((x) => x.id === Number(id)).map((x) => imageUrl + x.backdrop_path);
                setFilteredMovieById(daa);
                let title = data.filter((x) => x.id === Number(id)).map((x) => x.title);
                setMovieTitle(title);
                let description = data.filter((x) => x.id === Number(id)).map((x) => x.overview);
                setMovieDiscription(description);
            });
    }, []);

    return (
        <Container>
            {filteredMovieById && (
                <>
                    <Background>
                        <img src={filteredMovieById} alt="filterdImg" />
                    </Background>
                    <h1>{movieTitle}</h1>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>{movieTitle}</SubTitle>
                    <Discription>{movieDiscription}</Discription>
                </>
            )}
        </Container>
    );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-y: hidden;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.75;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 60px;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 15px;
    }
`;

const PlayButton = styled.button`
    border-radius: 4px;
    padding: 0 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all 0.25s ease-in;

    &:hover {
        background-color: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: black;
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Discription = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
`;
