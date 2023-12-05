import { useState } from "react";
import {
	CategoryContainer,
	CategoryTitle,
	CategoryWrapper,
} from "./style/CategoryStyles";
import { NextBtn, PrevBtn, rowVaritants } from "./style/SliderStyles";
import { AnimatePresence } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const categotyList = [
	"모든 카테고리",
	"한국 TV 프로그램",
	"외국 TV 프로그램",
	"한국 영화",
	"외국 영화",
	"액션",
	"로맨스",
	"코미디",
	"스릴러",
	"어드벤처",
	"범죄",
	"애니메이션",
	"예능",
	"판타지",
	"SF",
	"공포",
	"미스터리",
	"다큐멘터리",
	"패밀리",
	"한국 드라마",
	"미국 드라마",
];
const offset = 7;
export default function Category() {
	const [dir, setDir] = useState(1);
	const [index, setIndex] = useState(0);
	const [leaving, setLeaving] = useState(false);

	function IncreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(1);
		setIndex((prev) => (prev === 2 ? 0 : prev + 1));
	}
	function DecreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(-1);
		setIndex((prev) => (prev === 0 ? 2 : prev - 1));
	}
	function toggleLeaving() {
		setLeaving((prev) => !prev);
	}
	console.log(index);
	return (
		<>
			<CategoryContainer>
				<NextBtn onClick={IncreaseIndex}>
					<MdNavigateNext />
				</NextBtn>
				<AnimatePresence
					initial={false}
					onExitComplete={toggleLeaving}
					custom={dir}
				>
					<CategoryWrapper
						custom={dir}
						variants={rowVaritants}
						initial="hidden"
						animate="visible"
						transition={{ type: "tween", duration: 1 }}
						exit="exit"
						key={index}
					>
						{categotyList
							.slice(index * offset, index * offset + offset)
							.map((i) => (
								<>{<CategoryTitle>{i}</CategoryTitle>}</>
							))}
					</CategoryWrapper>
				</AnimatePresence>
				<PrevBtn onClick={DecreaseIndex}>
					<MdNavigateBefore />
				</PrevBtn>
			</CategoryContainer>
		</>
	);
}
