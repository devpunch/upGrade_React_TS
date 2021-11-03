import styled from "styled-components";

export const Wrapper = styled.div <{bg?: string, height?: number | string, padBot?: string | number}>`
  width: 100%;
  height: ${props => props.height};
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  padding-bottom: ${props => props.padBot};
`

export const Container = styled.div `
  max-width: 1360px;
  margin: 0 auto;
`