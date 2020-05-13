import styled from 'styled-components';

import logoWithText from '../../assets/logo-with-text.png';

export const Container = styled.div`
  width: 190px;
  height: 100vh;
  background-color: #373b53;
  display: flex;
  flex-direction: column;
  position: fixed;

  @media (max-width: 738px) {
    width: 100%;
    height: 150px;
    background: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  background-color: #142850;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoImg = styled.div`
  width: 98px;
  height: 99px;

  background: url(${logoWithText}) no-repeat;
`;

export const Item = styled.div`
  margin-top: 30px;
  @media (max-width: 738px) {
    display: flex;
    width: 140px;
    align-items: center;
    justify-content: space-between;
    background: url(${({ image }) => image}) no-repeat;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 50px;
  background: url(${({ image }) => image}) no-repeat top;
  cursor: pointer;

  .itemText {
    margin-top: 30px;
    color: #e7e7e7;
    font-size: 18px;
    text-decoration: none;
    @media (max-width: 738px) {
      width: 100%;
      color: #fff;
      display: flex;
      position: relative;
      right: 40px;
    }
  }
`;

export const SupportItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 738px) {
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 2px;
    position: relative;
    left: 60px;
  }
  img {
    @media (max-width: 738px) {
      margin-bottom: 5px;
      margin-left: 10px;
    }
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
  @media (max-width: 738px) {
    display: none;
  }
`;

export const Menu = styled.button`
  display: flex;
  background: none;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin-right: 100px;

  @media (max-width: 738px) {
    position: relative;
    right: 30px;
    top: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ open }) => (open ? 120 : 0)}px;
  }
`;
