import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderContainer = styled(motion.div)`
	margin: 4rem 0;
	position: relative;
	width: 100%;
	height: 300px;
`;
export const SliderWrapper = styled(motion.div)`
	position: absolute;
	width: 95%;
	top: 50px;
	left: 2.5%;
	height: 180px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
	a {
	}
	a:hover {
		transform-origin: center bottom;
		div {
			display: flex;
		}
		transition: scale 0.3s linear;
		z-index: 3;
		scale: 1.3;
		&:last-child {
			transform-origin: right bottom;
		}
		&:first-child {
			transform-origin: left bottom;
		}
	}
`;
export const SliderBox = styled.div<{ bgphoto: string }>`
	height: 220px;
	border-radius: 5px;
	background-image: url(${(props) => props.bgphoto});
	object-fit: contain;
	background-size: 100% 220px;
	cursor: pointer;
`;
export const NextBtn = styled.button`
	height: 100%;
	position: absolute;
	top: 5%;
	right: 0;
	z-index: 1;
	background-color: transparent;
	border: none;
	font-size: 48px;
	color: white;
	cursor: pointer;
`;
export const PrevBtn = styled.button`
	height: 100%;
	position: absolute;
	top: 5%;
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
		x: window.outerWidth * dir + 5,
	}),
	visible: {
		x: 0,
	},
	exit: (dir: number) => ({
		x: -window.outerWidth * dir - 5,
	}),
};
