import {
	FooterColumnLeft,
	FooterColumnRight,
	FooterContainer,
	FooterInfoColumn,
	FooterInfoDetail,
	FooterInfoDetailA,
} from "./../style/FooterStyles";

export default function Footer() {
	function onLogoClick() {
		window.location.replace("/react-coupangplay-clone/");
	}
	return (
		<>
			<FooterContainer>
				<FooterColumnLeft>
					<button onClick={onLogoClick}>
						<img
							src="https://assets.coupangplay.com/images/logo_coupangplay2.png"
							alt="Logo"
						/>
					</button>
					<p>버전: 1.42.25</p>
				</FooterColumnLeft>
				<FooterColumnLeft>
					<FooterInfoColumn>
						<FooterInfoDetail>
							쿠팡(주) | 대표이사: 박대준, 강한승
						</FooterInfoDetail>
						<FooterInfoDetail>
							서울시 송파구 송파대로 570
						</FooterInfoDetail>
						<FooterInfoDetail>
							사업자 등록번호: 120-88-00767
						</FooterInfoDetail>
						<FooterInfoDetail>
							통신판매업신고: 2017-서울송파-0680
						</FooterInfoDetail>
						<FooterInfoDetailA id="footerblue">
							사업자 정보
						</FooterInfoDetailA>
					</FooterInfoColumn>
				</FooterColumnLeft>
				<FooterColumnLeft>
					<FooterInfoColumn>
						<FooterInfoDetail>고객센터: 1600–9800</FooterInfoDetail>
						<FooterInfoDetail>
							대표 메일: playrepresent@coupang.com
						</FooterInfoDetail>
						<FooterInfoDetail>
							제휴 문의: playbusiness@coupang.com
						</FooterInfoDetail>
						<FooterInfoDetail>
							호스팅 서비스 사업자: AWS 코리아
						</FooterInfoDetail>
						<FooterInfoDetailA id="footerblue">
							서비스 이용약관
						</FooterInfoDetailA>
						<FooterInfoDetailA id="footerblue">
							유료상품 이용약관
						</FooterInfoDetailA>
						<FooterInfoDetailA id="footerblue">
							FAQ
						</FooterInfoDetailA>
						<FooterInfoDetailA id="footerblue">
							개인정보 처리방침
						</FooterInfoDetailA>
					</FooterInfoColumn>
				</FooterColumnLeft>
				<FooterColumnRight>
					<a
						href="https://www.youtube.com/channel/UCjn-VbcIkAeXQKCmLJV8YwQ"
						target="blank"
					>
						<img
							src="https://assets.coupangplay.com/images/socials/social-yt.png"
							alt="youtube"
						/>
					</a>
					<a
						href="https://www.facebook.com/CoupangPlay/"
						target="blank"
					>
						<img
							src="https://assets.coupangplay.com/images/socials/social-fb.png"
							alt="youtube"
						/>
					</a>
					<a
						href="https://www.instagram.com/coupangplay/"
						target="blank"
					>
						<img
							src="https://assets.coupangplay.com/images/socials/social-ig.png"
							alt="youtube"
						/>
					</a>
					<a href="https://twitter.com/coupangplay" target="blank">
						<img
							src="https://assets.coupangplay.com/images/socials/social-tw.png"
							alt="youtube"
						/>
					</a>
				</FooterColumnRight>
			</FooterContainer>
		</>
	);
}
