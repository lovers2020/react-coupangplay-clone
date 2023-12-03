import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderContainer = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 300px;
`;
export const SliderWrapper = styled(motion.div)`
	position: absolute;
	top: 50px;
	left: 50px;
	width: 100%;
	height: 225px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
`;
export const SliderBox = styled.div<{ bgphoto: string }>`
	width: 320px;
	height: 180px;
	border-radius: 5px;
	background-image: url(${(props) => props.bgphoto});
	object-fit: contain;
	background-size: 320px 180px;
	cursor: pointer;
	&:hover {
		div {
			display: flex;
		}
		transition: scale 0.3s linear;
		z-index: 3;
		scale: 1.2;
		transform-origin: center bottom;
	}
`;
export const NextBtn = styled.button`
	height: 100%;
	position: absolute;
	top: 0;
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
	top: 0;
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
