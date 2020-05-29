import React from 'react';
import * as S from './styles';
import logo from '../../assets/Logo.png'

function Index() {
  return (
  	<S.Container>
  <S.Menu>
  	<img className="App-logo" src={logo}/>

  	<div className="App-Links">
  		<a>Home</a>
  		<a>Quem somos</a>
  		<button>Já tenho conta</button>
  	</div>
  </S.Menu>
  </S.Container>
  );
}

export default Index;
