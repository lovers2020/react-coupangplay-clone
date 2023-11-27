import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeaderContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 70px;
	padding: 8px 30px;
	background-color: black;
	z-index: 99;
	white-space: nowrap;
	transition: background-color 0.3s ease-in-out;
`;
export const HeaderRow = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
	color: white;
`;
export const HeaderTitle = styled(motion.li)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	margin-right: 8px;
	cursor: pointer;
	a {
		text-decoration: none;
		color: white;
	}
	&:hover {
		#profileDetail {
			display: flex;
		}
		#profileArrow {
			rotate: 180deg;
		}
		a {
			border-bottom: 2px solid white;
		}
	}
	&:focus-within {
		a {
			border-bottom: 2px solid white;
		}
	}
`;
export const HeaderLogo = styled.div`
	background-image: url("https://assets.coupangplay.com/images/logo.png");
	background-repeat: no-repeat;
	background-size: cover;
	width: 40px;
	height: 34px;
	cursor: pointer;
`;
export const ProfileIcon = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
	color: white;
	background: linear-gradient(to bottom, #006eb3, #c9c7c7);
	border: 2px solid white;
	border-radius: 50%;
	padding: 6px;

	cursor: pointer;
`;
export const ProfileDetail = styled.div`
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	position: absolute;
	right: -20px;
	top: 40px;
	background-color: #333333;
	color: rgba(255, 255, 255, 0.7);
	font-size: 16px;
	font-weight: 400;
	border-radius: 5px;
	width: 130px;
	height: 260px;

	&:hover {
		display: flex;
	}
	span {
		&:hover {
			color: white;
		}
	}
`;

export const searchVariants = {
	initial: {
		scale: 1,
	},
	hover: {
		scale: 1.2,
		transition: {
			type: "tween",
			duration: 0.3,
		},
	},
};

export const scrollVariants = {
	initial: {
		backgroundColor: "transparent",
	},
	scroll: {
		backgroundColor: "black",
	},
};
