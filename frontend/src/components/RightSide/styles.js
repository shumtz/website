import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .heartBackground {
    position: absolute;
    left: 105vh;
  }
`;

export const Form = styled.div`
  display: block;
  position: absolute;
  width: 50vh;
  height: 62.72px;
  left: 440px;

  input {
  margin-top: 10px;
  width: 100%;
	height: 60px;
	color: #333;
	border: 1px solid #373B53;
	padding: 0 24px;
	box-sizing: border-box;
	border-radius: 20px;
  font-size: 18px;
  }

  button {
  	margin-top: 10px;
  	background: #164c7a;
  	border: none;
  	border-radius: 15px;
  	width: 100%;
  	height: 60px;
  	color: #fff;
  	font-size: 18px;
    transition: 0.5s;

    :hover {
      opacity: 0.9;
    }
  }

  a {
  	text-decoration: none;
  }

  p {
  	margin-top: 10px;
  	text-align: right;
  	color: #373B53;
  }

  h2 {
  padding-bottom: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  text-align: center
  }
`

export const Icon = styled.div`
  position: absolute;
  left: 65vh;
  top: 33vh;
  height: 10vh;
  width: 10vh;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

  img {
    position: absolute;
    top: 10px;
    left: 15px;
  }
`
export const Register = styled.div`
  position: absolute;
  width: 308px;
  height: 68px;
  left: 165vh;
  top: 91vh;

   button {
   margin-top: 10px;
   background: #FF0000;
   border: none;
   border-radius: 15px;
   width: 100%;
   height: 60px;
   color: #fff;
   font-size: 18px;
   transition: 0.5s;

    :hover {
      opacity: 0.9;
    }
  }
`


// DEPOIS EU VOU ARRUMAR SA PORRA DE CSS