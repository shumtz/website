import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1360px) {
    justify-content: center;
  }

  p {
    text-align: right;
    padding: 10px;
    color: #373b53;
    text-decoration: none;

    @media (max-width: 738px) {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: right;
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
  }

  .heartBackground {
    margin-right: 50%;
    width: 90%;

    @media (max-width: 738px) {
      display: none;
    }
  }
`;

export const Form = styled.div`
  input {
    width: 60vh;
  }
  button {
    margin-top: 10px;
    background: #164c7a;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    transition: 0.5s;

    @media (max-width: 738px) {
      width: 100%;
      font-size: 18px;
    }
    :hover {
      opacity: 0.9;
    }
  }

  h2 {
    padding-bottom: 20px;
    font-family: Raleway, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 59px;
    @media (max-width: 738px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      font-size: 24px;
    }
  }
`;

export const Pacient = styled.div`
  align-self: flex-end;

  @media (max-width: 738px) {
    display: none;
  }
`;

// loxt fudeu o css
// eu quero me matar - ass: Gio
