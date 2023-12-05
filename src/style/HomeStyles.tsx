import { styled } from "styled-components";
export const Loading = styled.div<{ bgphoto: string }>`
	width: 100%;
	height: 1000px;
	color: white;
	margin-top: 50px;
	background-size: 100% 100%;
	background-image: url(${(props) => props.bgphoto});
`;

export const MainWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;
