import React from 'react';
import LogoIcon from '../../assets/img/full-logo.svg';
import BackGround from '../../assets/img/img-bg.jpg';
import Input from './/Input';
import {Form, Info, Inner, Login, Logo, Span, Wrapper} from "./Main.styled";


export const LogInPage = () => {

  return (
    <>
      <Wrapper
        bg={BackGround}
      >
        <Logo src={LogoIcon} alt="Logo image"/>
        <Form>
          <Input
            type="text"
            placeholder="Email"
            margin={"0 0 16px 0"}
          />
          <Input
            type="password"
            placeholder="Password"
            margin={"0 0 32px 0"}
          />
          <Login>
            Log In
          </Login>
        </Form>
        <Inner>
          <Info>
            UPGRADE VR analytics
          </Info>
          <Span>
            V 0.1
          </Span>
        </Inner>
      </Wrapper>
    </>
  )
}
