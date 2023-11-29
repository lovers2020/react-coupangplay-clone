import { motion } from "framer-motion";
import styled from "styled-components";

export const Slider = styled.div`
	position: relative;
	width: 100%;
	height: 850px;
`;
export const Wrapper = styled(motion.div)`
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(1, 1fr);
	position: absolute;
	width: 100%;
`;
export const MainBg = styled.div`
	display: flex;
`;
export const MainBgImg = styled.div<{ bgphoto: string }>`
	background-image: linear-gradient(
			to right,
			black,
			10%,
			rgba(0, 0, 0, 0) 20%
		),
		linear-gradient(black, 5%, rgba(0, 0, 0, 0) 20%),
		linear-gradient(to left, black, 2%, rgba(0, 0, 0, 0) 15%),
		linear-gradient(to top, black, 5%, rgba(0, 0, 0, 0) 15%),
		url(${(props) => props.bgphoto});
	background-size: cover;
	width: 65%;
	height: 800px;
`;
export const MainBgDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 6rem;
	width: 35%;
	height: 800px;
`;
export const MainBgTitle = styled.span`
	color: white;
	font-size: 48px;
`;
export const Detail = styled.p`
	margin: 1.5rem 0;
	color: white;
	font-size: 20px;
	svg {
		width: 24px;
		height: 24px;
		fill: #00a7f6;
	}
	span {
		margin: 0 5px;
	}
`;
export const PlayBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 70px;
	border-radius: 5px;
	background-color: #00a7f6;
	color: white;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		background-color: #006eb3;
	}
	svg {
		margin-right: 10px;
		width: 24px;
		height: 24px;
		fill: white;
	}
`;
export const NextBtn = styled.button`
	position: absolute;
	top: 45%;
	right: 0;
	z-index: 1;
	background-color: transparent;
	border: none;
	font-size: 48px;
	color: white;
	cursor: pointer;
`;
export const PrevBtn = styled.button`
	position: absolute;
	top: 45%;
	left: 0;
	z-index: 1;
	background-color: transparent;
	border: none;
	font-size: 48px;
	color: white;
	cursor: pointer;
`;

export const rowVaritants = {
	hidden: (dir: number) => ({
		x: window.outerWidth * dir,
	}),
	visible: {
		x: 0,
	},
	exit: (dir: number) => ({
		x: -window.outerWidth * dir,
	}),
};
