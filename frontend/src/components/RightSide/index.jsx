import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import arrowRightItem from '../../assets/arrow-right.png';
import doctorItem from '../../assets/doctor.png';
import heartBackgroundItem from '../../assets/heart-with-background.png';

function RightSide() {
  return (
    <S.Container>
      <S.Icon>
        <img src={doctorItem} alt='doctorItem' />
      </S.Icon>
      <S.Form>
        <h2>Quero Entrar</h2>
        <input placeholder='CRM ou CPF' type='text' />
        <input placeholder='Sua Senha' type='password' />
        <button type='submit'>
          <img src={arrowRightItem} alt='arrowRightItem' />
        </button>
        <Link to='/'>
          <p>Esqueci minha senha</p>
        </Link>
      </S.Form>
      <S.Register>
        <button type='submit'>Entrar como paciente</button>
      </S.Register>
      <img
        className='heartBackground'
        src={heartBackgroundItem}
        alt='heartBackground'
      />
    </S.Container>
  );
}

export default RightSide;
