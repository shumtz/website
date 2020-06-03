import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Mode = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 15px;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;

  img {
    width: 409px;
    height: 81px;
  }

  a {
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
    color: #000;
    font-weight: bold;
  }

  button {
    color: #fff;
    background: #6c63ff;
    padding: 14px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 126, 255, 0.16);
  }
`;
