import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import homeItem from '../../assets/home.png';
import registerItem from '../../assets/register.png';
import supportItem from '../../assets/support.png';

function LeftSide() {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImg />
      </S.LogoContainer>
      <S.Item image={homeItem}>
        <Link className='itemText' to='/'>
          Login
        </Link>
      </S.Item>
      <S.Separator />
      <S.Item image={registerItem}>
        <Link className='itemText' to='/register'>
          Cadastrar
        </Link>
      </S.Item>
      <S.Separator />
      <S.SupportItem>
        <S.Separator />
        <img src={supportItem} alt='Support' />
        <Link to='/support'>Support</Link>
      </S.SupportItem>
    </S.Container>
  );
}

export default LeftSide;
