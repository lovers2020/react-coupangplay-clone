import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import {
	HeaderContainer,
	HeaderLogo,
	HeaderRow,
	HeaderTitleLeft,
	HeaderTitleRight,
	ProfileDetail,
	ProfileIcon,
	scrollVariants,
	searchVariants,
} from "../style/HeaderStyles";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
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
	"/",
	"movies",
	"sports",
	"store",
	"kids",
	"news",
	"likedcontents",
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
	let location = useLocation().pathname;
	location = location === "/" ? "/" : location.slice(1);
	const { scrollY } = useScroll();
	const scrollAnimation = useAnimation();
	useMotionValueEvent(scrollY, "change", (y) => {
		if (y >= 100) {
			scrollAnimation.start("scroll");
		} else {
			scrollAnimation.start("initial");
		}
	});
	function onLogoClick() {
		window.location.replace("/react-coupangplay-clone/");
	}
	return (
		<>
			<HeaderContainer
				variants={scrollVariants}
				initial="initial"
				animate={scrollAnimation}
			>
				<HeaderTitleLeft
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
				</HeaderTitleLeft>
				<HeaderRow>
					{[0, 1, 2, 3, 4, 5, 6].map((current) => (
						<HeaderTitleLeft
							location={location === headerTitleEng[current]}
						>
							<Link
								to={headerTitleEng[current]}
								style={{ display: "block", padding: "1rem" }}
							>
								{headerTitle[current]}
							</Link>
						</HeaderTitleLeft>
					))}
				</HeaderRow>
				<HeaderRow style={{ marginLeft: "auto" }}>
					<HeaderTitleRight
						variants={searchVariants}
						initial="initial"
						whileHover="hover"
						transition={{ type: "tween", duration: 0.5 }}
					>
						<Link to="/search">
							<AiOutlineSearch
								id="searchicon"
								style={{ fontSize: "30px" }}
							/>
						</Link>
					</HeaderTitleRight>
					<HeaderTitleRight style={{ padding: "0 10px" }}>
						<ProfileIcon>
							<p>S</p>
							<ProfileDetail id="profileDetail">
								{[0, 1, 2, 3, 4, 5].map((current, index) => (
									<span
										key={index}
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
					</HeaderTitleRight>
				</HeaderRow>
			</HeaderContainer>
		</>
	);
}
