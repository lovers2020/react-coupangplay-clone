import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
	HeaderContainer,
	HeaderLogo,
	HeaderRow,
	HeaderTitle,
	ProfileDetail,
	ProfileIcon,
} from "../style/HeaderStyles";
import { AnimatePresence } from "framer-motion";
const headerTitle: string[] = [
	"TV",
	"영화",
	"스포츠",
	"스토어",
	"키즈",
	"뉴스",
	"찜한 콘텐츠",
];
const headerTitleEng: string[] = [
	"tv",
	"movies",
	"sports",
	"store",
	"kids",
	"news",
	"liked",
];
const profileDetail: string[] = [
	"프로필 관리",
	"구매내역",
	"할인쿠폰",
	"리뷰 관리",
	"의견 보내기",
	"로그아웃",
];
export default function Header() {
	function onLogoClick() {
		window.location.replace("/");
	}
	return (
		<>
			<HeaderContainer>
				<HeaderRow>
					<HeaderTitle>
						<button
							onClick={onLogoClick}
							style={{
								backgroundColor: "transparent",
								border: "none",
							}}
						>
							<HeaderLogo />
						</button>
					</HeaderTitle>
					{[0, 1, 2, 3, 4, 5, 6].map((current) => (
						<HeaderTitle>
							<Link to={`${headerTitleEng[current]}`}>
								{headerTitle[current]}
							</Link>
						</HeaderTitle>
					))}
				</HeaderRow>
				<AnimatePresence>
					<HeaderRow>
						<HeaderTitle>
							<AiOutlineSearch style={{ fontSize: "30px" }} />
						</HeaderTitle>
						<HeaderTitle>
							<ProfileIcon>
								<p>S</p>
								<ProfileDetail id="profileDetail">
									{[0, 1, 2, 3, 4, 5].map((current) => (
										<span
											style={{
												margin: "12px 0",
												padding: "0 0 0 25px",
											}}
										>
											{profileDetail[current]}
										</span>
									))}
								</ProfileDetail>
							</ProfileIcon>
							<BiChevronDown
								id="profileArrow"
								style={{ fontSize: "30px" }}
							/>
						</HeaderTitle>
					</HeaderRow>
				</AnimatePresence>
			</HeaderContainer>
		</>
	);
}
