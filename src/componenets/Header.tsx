import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
	HeaderContainer,
	HeaderLogo,
	HeaderRow,
	HeaderTitle,
	ProfileIcon,
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
					{[1, 2, 3, 4, 5, 6, 7].map((current) => (
						<HeaderTitle>
							<Link to="/" />
							{headerTitle[current - 1]}
						</HeaderTitle>
					))}
				</HeaderRow>
				<HeaderRow>
					<HeaderTitle>
						<AiOutlineSearch style={{ fontSize: "30px" }} />
					</HeaderTitle>
					<HeaderTitle>
						<ProfileIcon>S</ProfileIcon>
						<BiChevronDown style={{ fontSize: "30px" }} />
					</HeaderTitle>
				</HeaderRow>
			</HeaderContainer>
		</>
	);
}
