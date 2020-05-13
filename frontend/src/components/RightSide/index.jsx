import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import arrowRightItem from '../../assets/arrow-right.png';
import heartBackgroundItem from '../../assets/heart-with-background.png';

function RightSide() {
  return (
    <S.Container>
      <S.Form>
        <h2 className='text-center'>Quero Entrar</h2>
        <input className='input' placeholder='CRM ou CPF' type='text' />
        <input className='input' placeholder='Sua Senha' type='password' />
        <button type='submit'>
          <img src={arrowRightItem} alt='arrowRightItem' />
        </button>
        <Link to='/'>
          <p>Esqueci minha senha</p>
        </Link>
      </S.Form>
      <S.Pacient>
        <button type='submit'>Entrar como paciente</button>
      </S.Pacient>
      <img
        className='heartBackground'
        src={heartBackgroundItem}
        alt='heartBackground'
      />
    </S.Container>
  );
}

export default RightSide;
