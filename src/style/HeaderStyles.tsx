import { styled } from "styled-components";

export const HeaderContainer = styled.nav`
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	background-color: black;
	z-index: 99;
`;
export const HeaderRow = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	padding: 8px 30px;
`;
export const HeaderTitle = styled.span`
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	color: white;
	background-color: transparent;
	margin: 0 1.15rem;
	cursor: pointer;
`;
export const HeaderLogo = styled.div`
	background-image: url("https://assets.coupangplay.com/images/logo.png");
	background-repeat: no-repeat;
	background-size: cover;
	width: 40px;
	height: 34px;
	cursor: pointer;
`;
export const ProfileIcon = styled.div`
	width: 18px;
	height: 18px;
	color: white;
	background: linear-gradient(to bottom, #006eb3, #c9c7c7);
	border: 2px solid white;
	border-radius: 50%;
	padding: 6px;
	text-align: center;
	cursor: pointer;
`;
