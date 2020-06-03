import React from 'react';
import * as S from './styles';
import logo from '../../assets/Logo.png';

function Index() {
  return (
    <S.Container>
      <S.Mode>
        <p>Darkmode</p>
      </S.Mode>
      <S.Menu>
        <img src={logo} alt='Imagem do caralho' />

        <div className='App-Links'>
          <a href='/'>Home</a>
          <a href='/'>Quem somos</a>
          <button type='button'>Já tenho conta</button>
        </div>
      </S.Menu>
    </S.Container>
  );
}

export default Index;
