import styled from "styled-components";

const EtcContainter = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: black;
	color: white;
	display: flex;
	p {
		margin: auto;
		font-size: 48px;
	}
`;

export function EtcPages() {
	return (
		<EtcContainter>
			<p>
				이 페이지는 아직 구현되지 않았습니다! <br />
				다른 메뉴를 이용해주세요.
			</p>
		</EtcContainter>
	);
}
