import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import * as S from './styles';
import homeItem from '../../assets/home.png';
import registerItem from '../../assets/register.png';
import supportItem from '../../assets/support.png';

function LeftSide() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <S.Menu open={open}>
        <HamburgerMenu
          color='black'
          isOpen={open}
          menuClicked={handleOpen}
          width={25}
          height={23}
          strokeWidth={1}
          rotate={0}
          animationDuration={0.5}
          borderRadius={1}
        >
          Expandir menu
        </HamburgerMenu>
      </S.Menu>

      {open === true ? (
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
      ) : null}
    </>
  );
}

export default LeftSide;
