import { motion } from "framer-motion";
import styled from "styled-components";

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
	background-image: linear-gradient(to right, black, 5%, rgba(0, 0, 0, 0) 20%),
		linear-gradient(black, 5%, rgba(0, 0, 0, 0) 20%),
		linear-gradient(to top, black, 2%, rgba(0, 0, 0, 0) 15%),
		url(${(props) => props.bgphoto});
	background-size: cover;
	width: 65%;
	height: 640px;
`;
export const MainBgDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 4rem;
	width: 35%;
	height: 640px;
`;
export const MainBgTitle = styled.span`
	color: white;
	font-size: 48px;
`;
export const Detail = styled.p`
	margin: 15px 0;
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
	width: 300px;
	height: 70px;
	border-radius: 5px;
	background-color: #00a7f6;
`;
export const rowVaritants = {
	hidden: {
		x: window.innerWidth,
	},
	visible: {
		x: 0,
	},
	exit: {
		x: -window.innerWidth,
	},
};

export const Slider = styled.div`
	position: relative;
`;
