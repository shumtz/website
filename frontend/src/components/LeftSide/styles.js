import styled from 'styled-components';

import logoWithText from '../../assets/logo-with-text.png';

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #373b53;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  background-color: #142850;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.div`
  width: 98px;
  height: 99px;

  background: url(${logoWithText}) no-repeat;
`;

export const Item = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 50px;
  background: url(${({ image }) => image}) no-repeat top;

  .itemText {
    margin-top: 30px;
    color: #e7e7e7;
    font-size: 18px;
    text-decoration: none;
  }

`;

export const SupportItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  img {
    display: flex;
    margin-top: 20px;
  }
  a {
    margin-bottom: 10px;
    color: #e7e7e7;
    font-size: 18px;
    text-decoration: none;
  }
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: #000 1px solid;
`;
