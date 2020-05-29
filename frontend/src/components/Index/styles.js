import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Menu = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	.App-Links {
	  float: left;
	  text-align: center;
	}

	.App-Links a {
	  padding: 14px 16px;
	  text-decoration: none;
	  font-size: 17px;
	}

	.App-Links button {
	  padding: 14px;
	  font-size: 17px;
	}
`;