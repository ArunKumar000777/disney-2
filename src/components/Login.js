import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg'/>
          <SignUp>GET ALL THERE</SignUp>
          <Discription>
          Disney+ Account Sign In. Please enter your email and password log in credentials to start streaming movies and TV series from Disney+ streaming.
          </Discription>
          <CTALogoTwo src='/images/cta-logo-two.png'/>

        </CTA>

    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &::before {
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: yellow;
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: .7;
      z-index: -1;
      background-image: url('/images/login-background.jpg');
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    margin-top: 8px;
    background-color: #0063e5;
    width: 100%;
    font-weight: bold;
    text-align: center;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1.5px;
    transition: all .250s ease;
    margin-bottom: 12px;

    &:hover {
      background-color: #0483ee;
    }
`

const Discription = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo =styled.img`
width: 90%;
`