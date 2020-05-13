import React from 'react';
import * as S from './styles';

function RightSideRegister() {
  return (
    <S.Container>
      <S.Form>
        <h4 className='text-center'>Registro</h4>
        <form>
          <select className='input' required>
            <option value='paciente'>Paciente</option>
            <option value='medico'>Médico</option>
          </select>
          <input className='input' placeholder='Nome' type='name' required />
          <input
            className='input'
            placeholder='Sobrenome'
            type='name'
            required
          />
          <input className='input' placeholder='E-mail' type='email' required />
          <input
            className='input'
            placeholder='Data de nascimento'
            type='date'
          />
          <S.FormGroup>
            <input className='input' placeholder='Cidade' type='city' />
            <select className=' input' style={{ width: 110 }}>
              <option value=''>SP</option>
              <option value=''>MG</option>
              <option value=''>RJ</option>
            </select>
          </S.FormGroup>
          <h3>Dados Pessoais</h3>
          <input className='input' placeholder='RG' type='number' />
          <input
            className='input'
            placeholder='CPF'
            type='number'
            maxlength='11'
            size='12'
          />
          <input className='checkbox' type='checkbox' required />
          Termos de uso
          <button action='submit'>Enviar</button>
        </form>
      </S.Form>
    </S.Container>
  );
}

export default RightSideRegister;
