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
export const MainBgImg = styled.div<{
	bgphoto: string;
	width: string;
	height: string;
}>`
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
	background-size: 100% 100%;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;
export const MainBgDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 6rem;
	width: 35%;
	height: 800px;
	a {
		text-decoration: none;
	}
`;
export const MainBgTitle = styled.span`
	color: white;
	font-size: 48px;
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
		transition: 0.3s;
		background-color: #006eb3;
	}
	svg {
		margin-right: 10px;
		width: 24px;
		height: 24px;
		fill: white;
	}
`;
export const PageDotsContainer = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const PageDots = styled.button<{ index: number }>`
	width: 10px;
	height: 10px;
	border: none;
	border-radius: 50%;
	margin: 0 8px;
	padding: 0;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.5);
	&:nth-child(${(props) => props.index + 1}) {
		background-color: white;
	}
`;
