import React from 'react';
import {
  Container,
  LogoContainer,
  LogoImg,
  Item,
  SupportItem,
  Separator,
} from './styles';

import homeItem from '../../assets/home.png';
import registerItem from '../../assets/register.png';
import supportItem from '../../assets/support.png';

function LeftSide() {
  return (
    <Container>
      <LogoContainer>
        <LogoImg />
      </LogoContainer>
      <Item image={homeItem}>
        <a className='itemText' href='/'>
          Login
        </a>
      </Item>
      <Separator />
      <Item image={registerItem}>
        <a className='itemText' href='/register'>
          Cadastrar
        </a>
      </Item>
      <Separator />
      <SupportItem>
        <Separator />
        <img src={supportItem} alt='Support' />
        <a href='/support'>Support</a>
      </SupportItem>
    </Container>
  );
}

export default LeftSide;
