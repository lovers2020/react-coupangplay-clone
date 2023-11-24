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
	searchVariants,
	titleVariants,
} from "../style/HeaderStyles";
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
				<HeaderTitle
					style={{
						padding: "0.5rem",
					}}
				>
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
				<HeaderRow>
					{[0, 1, 2, 3, 4, 5, 6].map((current) => (
						<HeaderTitle
							variants={titleVariants}
							initial="initial"
							whileHover="hover"
						>
							<Link
								to={`${headerTitleEng[current]}`}
								style={{ display: "block", padding: "1rem" }}
							>
								{headerTitle[current]}
							</Link>
						</HeaderTitle>
					))}
				</HeaderRow>
				<HeaderRow style={{ marginLeft: "auto" }}>
					<HeaderTitle
						variants={searchVariants}
						initial="initial"
						whileHover="hover"
					>
						<AiOutlineSearch
							id="searchicon"
							style={{ fontSize: "30px" }}
						/>
					</HeaderTitle>
					<HeaderTitle style={{ padding: "0 10px" }}>
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
			</HeaderContainer>
		</>
	);
}
