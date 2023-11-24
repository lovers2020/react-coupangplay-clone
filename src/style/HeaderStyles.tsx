import { styled } from "styled-components";

export const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	padding: 8px 30px;
	background-color: black;
	z-index: 99;
`;
export const HeaderRow = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
`;
export const HeaderTitle = styled.li`
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	color: white;
	background-color: transparent;
	margin: 0 1.15rem;
	cursor: pointer;
	a {
		text-decoration: none;
		color: white;
	}
	&:hover {
		#profileDetail {
			display: flex;
		}
		#profileArrow {
			rotate: 180deg;
		}
	}
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
	position: relative;
	width: 30px;
	height: 30px;
	color: white;
	background: linear-gradient(to bottom, #006eb3, #c9c7c7);
	border: 2px solid white;
	border-radius: 50%;
	padding: 6px;
	text-align: center;
	font-size: 14px;
	cursor: pointer;
`;
export const ProfileDetail = styled.div`
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	position: absolute;
	right: -20px;
	top: 35px;
	background-color: #333333;
	color: rgba(255, 255, 255, 0.7);
	font-size: 16px;
	font-weight: 400;
	border-radius: 5px;
	width: 130px;
	height: 260px;
	&:hover {
		display: flex;
	}
	span {
		&:hover {
			color: white;
		}
	}
`;
