import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: white;
	margin: 20px 0px 20px 40px;
`;
export const PopularWrapper = styled(motion.div)`
	position: absolute;
	top: 50px;
	width: 100vw;
	height: 225px;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	padding-left: 100px;
	gap: 20px;
`;

export const PopularBox = styled(motion.div)`
	position: relative;
	width: 180px;
	height: 225px;
	border-radius: 10px;
	background-color: blue;
`;
export const BoxDetail = styled(motion.div)`
	font-size: 14px;
	display: flex;
	flex-direction: column;
	color: white;
	background-color: #141414;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
	padding: 10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	display: none;
`;
export const PoularBoxImg = styled.div<{ bgphoto: string }>`
	position: relative;
	width: 180px;
	height: 225px;
	border-radius: 10px;
	background-image: url(${(props) => props.bgphoto});
	background-size: 180px 225px;
	cursor: pointer;
	&:hover {
		transition: scale 0.3s linear;
		z-index: 3;
		div {
			display: flex;
		}
		scale: 1.4;
		transform-origin: center bottom;
	}
`;
export const RankNumber = styled.span`
	color: black;
	font-size: 56px;
	font-weight: 700;
	position: absolute;
	bottom: 0;
	left: -70px;
	border: none;
	text-shadow: -1px 1px 2px #00a7f5, 0 -1px 2px #00a7f5, 1px 2px 4px #00a7f5;
`;

export const slideVariants = {
	initial: {
		scale: 1,
	},
	hover: {
		scale: 1.2,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		scale: 1,
	},
};
