import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                  <img src="/images/home-icon.svg" alt="" />
                  <span>HOME</span>
                </a>
                <a>
                  <img src="/images/search-icon.svg" alt="" />
                  <span>SEARCH</span>
                </a>
                <a>
                  <img src="/images/watchlist-icon.svg" alt="" />
                  <span>WATHLIST</span>
                </a>
                <a>
                  <img src="/images/original-icon.svg" alt="" />
                  <span>ORIGINALS</span>
                </a>
                <a>
                  <img src="/images/movie-icon.svg" alt="" />
                  <span>MOVIES</span>
                </a>
                <a>
                  <img src="/images/series-icon.svg" alt="" />
                  <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR533D2_f6blgeIePXS6evQ2j3mA3YxOJbE7A&usqp=CAU"/>
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      img {
        width: 20px;
      }

      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &::after {
          content: '';
          height: 2px;
          background-color: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform .25s ease;
        }
      }
        &:hover {
          span::after {
            opacity: 1;
            transform: scaleX(1);
          }
        }

    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;

`