import React from 'react';
import { Container, Form, Icon, Register } from './styles';

import arrowRightItem from '../../assets/arrow-right.png';
import doctorItem from '../../assets/doctor.png';
import heartBackgroundItem from '../../assets/heart-with-background.png';

function RightSide() {
  return (
    <Container>
	    <Icon>
	      <img src={doctorItem} />
	    </Icon>
      <Form>
        <h2>Quero Entrar</h2>
      	<input placeholder="CRM ou CPF" type="text"/>
      	<input placeholder="Sua Senha" type="password"/>
      	<button><img src={arrowRightItem}/></button>
      	<a href=""><p>Esqueci minha senha</p></a>
      </Form>
      <Register>
        <button>Entrar como paciente</button>
      </Register>
      <img className="heartBackground" src={heartBackgroundItem}/>
    </Container>
  );
}

export default RightSide;
