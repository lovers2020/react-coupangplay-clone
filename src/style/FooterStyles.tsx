import { styled } from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: 1400px;
	background-color: black;
	color: white;
	padding: 4rem 0;
	margin: auto;
`;

export const FooterColumnLeft = styled.div`
	gap: 10px;
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}
`;
export const FooterColumnRight = styled.div`
	font-size: 24px;
	img {
		margin-right: 10px;
		width: 38px;
		height: 38px;
	}
`;
export const FooterInfoColumn = styled.ul``;
export const FooterInfoDetail = styled.li`
	margin: 5px 0;
	&:nth-child(5),
	:nth-child(6),
	:nth-child(7),
	:nth-child(8) {
		color: #0097f6;
		cursor: pointer;
	}
`;
