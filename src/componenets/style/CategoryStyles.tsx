import { motion } from "framer-motion";
import styled from "styled-components";
export const CategoryContainer = styled.div`
	position: relative;
	width: 100%;
	height: 48px;
	margin-top: 30px;
`;
export const CategoryWrapper = styled(motion.div)`
	position: absolute;
	width: 90%;
	left: 7%;
	top: 0;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	text-align: center;
`;
export const CategoryTitle = styled.span`
	width: 250px;
	color: #26aded;
	font-size: 24px;
	font-weight: 600;
	padding: 10px 23px;
	border-radius: 20px;
	background-color: #0c374b;
	cursor: pointer;
	&:hover {
		background-color: #145b7c;
	}
`;
