import styled from "styled-components";

export const DetailContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
`;

export const DetailLogo = styled.div<{ bgphoto: string }>`
	background-image: url(${(props) => props.bgphoto});
	background-size: 100% 100%;
	width: 450px;
	height: 200px;
`;
export const DetailFunction = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const AddLikeWrapper = styled.button`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	svg {
		width: 35px;
		height: 35px;
		fill: white;
		margin-bottom: 5px;
	}
	p {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.7);
	}
`;
export const AddLike = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: 2px solid white;
	color: white;
	line-height: 1.3;
	font-size: 24px;
	text-align: center;
	margin-bottom: 5px;
`;

export const OverView = styled.span`
	margin: 20px 0;
	font-size: 20px;
	font-weight: 400;
`;
