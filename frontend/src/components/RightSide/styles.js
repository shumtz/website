import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .heartBackground {
    position: absolute;
    left: 120vh;
  }
  @media only screen and (max-width: 1360px) {
    .heartBackground {
      width: 50vh;
      height: 50vh;
      left: 140vh;
    }
  }
`;

export const Form = styled.div`
  display: block;
  position: absolute;
  width: 70vh;
  height: 62.72px;
  top: 30vh;
  left: 40vh;

  button {
    margin-top: 10px;
    background: #164c7a;
    border: none;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    color: #fff;
    font-size: 18px;
    transition: 0.5s;

    :hover {
      opacity: 0.9;
    }
  }

  a {
    text-decoration: none;
  }

  p {
    margin-top: 10px;
    text-align: right;
    color: #373b53;
  }

  h2 {
    padding-bottom: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 59px;
  }

  @media only screen and (max-width: 1200px) {
    top: 27vh;
    left: 55vh;
    width: 60vh;
  }
  @media only screen and (max-width: 480px) {
    top: 27vh;
    left: 08vh;
    width: 60vh;
  }
`;

export const Pacient = styled.div`
  position: absolute;
  width: 308px;
  height: 68px;
  left: 165vh;
  top: 91vh;

  button {
    margin-top: 10px;
    background: #ff0000;
    border: none;
    border-radius: 15px;
    width: 100%;
    height: 60px;
    color: #fff;
    font-size: 18px;
    transition: 0.5s;

    :hover {
      opacity: 0.9;
    }
  }
  @media only screen and (min-width: 1200px) {
    top: 87vh;
  }
`;

// DEPOIS EU VOU ARRUMAR SA PORRA DE CSS
