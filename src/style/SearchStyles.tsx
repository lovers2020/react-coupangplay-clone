import styled from "styled-components";
export const SearchLogo = styled.img`
	scale: 1.5;
	margin-right: 30px;
	&:hover {
		cursor: pointer;
		scale: 1.7;
	}
`;
export const SearchContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
`;

export const SearchBoxContainer = styled.div`
	width: 800px;
	height: 100px;
	margin: 100px auto;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;

	img {
		position: absolute;
		right: 40px;
	}
`;

export const Input = styled.input`
	box-sizing: border-box;
	width: 90%;
	height: 60%;
	border-radius: 40px;
	background-color: inherit;
	border: 1px solid rgba(255, 255, 255, 0.4);
	color: white;
	font-size: 25px;
	padding: 0 30px;
`;
