import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { auth } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(setUserLogin({ name: user.displayName, photo: user.photoURL, email: user.email }));
                navigate("/");
            })
            .catch((error) => {});
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUserLogin({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                    })
                );
                navigate("/");
            }
        });
    }, []);

    const logOut = async () => {
        await signOut(auth);
        dispatch(setSignOut());
        navigate("/login");
    };
    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            {!userName ? (
                <Login onClick={signInWithGoogle}>Login</Login>
            ) : (
                <>
                    <NavMenu>
                        <NavLink to={"/"} style={{ textDecoration: "none" }}>
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </NavLink>

                        <a href="0">
                            <img src="/images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a>
                        <a href="0">
                            <img src="/images/watchlist-icon.svg" alt="" />
                            <span>WATHLIST</span>
                        </a>
                        <a href="0">
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="0">
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a href="0">
                            <img src="/images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserInfo>
                        <UserName>{userName}</UserName>
                        <UserImg src={userPhoto} onClick={logOut} />
                    </UserInfo>
                </>
            )}
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 7px 16px;
    border-radius: 4px;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease;
    align-self: center;
    margin-left: auto;
    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
        cursor: pointer;
    }
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        img {
            width: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            color: white;

            &::after {
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: transform 0.25s ease;
            }
        }
        &:hover {
            span::after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    @media (max-width: 600px) {
        margin-left: auto;
    }
`;
const UserName = styled.p`
    @media (max-width: 600px) {
        display: none;
    }
`;

const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 35px;
        height: 35px;
    }
`;
