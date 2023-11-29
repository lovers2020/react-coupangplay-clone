import { motion } from "framer-motion";
import { styled } from "styled-components";
export const Loading = styled.div`
	width: 100%;
	height: 500px;
	font-size: 28px;
	color: white;
	text-align: center;
	margin-top: 50px;
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
	background-image: url(${(props) => props.bgphoto});
	background-size: cover;
	width: 60%;
	height: 640px;
`;
export const MainBgDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 4rem;
	width: 40%;
	height: 640px;
`;
export const MainBgTitle = styled.span`
	color: white;
	font-size: 40px;
`;
export const Detail = styled.p`
	margin: 10px 0;
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
