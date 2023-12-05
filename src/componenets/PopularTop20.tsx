import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
	PopularWrapper,
	PoularBoxImg,
	RankNumber,
	Title,
} from "./style/PopularTop20Styles";
import {
	NextBtn,
	PrevBtn,
	SliderContainer,
	rowVaritants,
} from "./style/SliderStyles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateImagePath } from "../utils/utils";

import GetDetail from "./common/getDetail";
import { Link } from "react-router-dom";

/* vote_avg, name, id, backdrop, poster */

export default function PopularTop20({ data, category }: any) {
	const [dir, setDir] = useState(1);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(8);
	const [leaving, setLeaving] = useState(false);

	function toggleLeaving() {
		setLeaving((prev) => !prev);
	}

	function IncreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(1);
		if (startIndex === 0) {
			setStartIndex(8);
			setEndIndex(16);
		} else if (startIndex === 8) {
			setStartIndex(12);
			setEndIndex(20);
		} else {
			setStartIndex(0);
			setEndIndex(8);
		}
	}
	function DecreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(-1);
		if (startIndex === 0) {
			setStartIndex(12);
			setEndIndex(20);
		} else if (startIndex === 8) {
			setStartIndex(0);
			setEndIndex(8);
		} else {
			setStartIndex(8);
			setEndIndex(16);
		}
	}

	return (
		<>
			{!data ? null : (
				<SliderContainer>
					<Title>이번 주 인기작 TOP 20</Title>

					<NextBtn onClick={IncreaseIndex}>
						<MdNavigateNext />
					</NextBtn>
					<AnimatePresence
						initial={false}
						onExitComplete={toggleLeaving}
						custom={dir}
					>
						<PopularWrapper
							custom={dir}
							variants={rowVaritants}
							initial="hidden"
							animate="visible"
							transition={{ type: "tween", duration: 0.7 }}
							exit="exit"
							key={startIndex}
						>
							{data
								.slice(startIndex, endIndex)
								.map((current: any, i: number) => (
									<>
										<Link to={"/" + category + current.id}>
											<PoularBoxImg
												key={current.id}
												bgphoto={CreateImagePath(
													current.poster_path,
													"w185"
												)}
											>
												<RankNumber>
													{startIndex + i + 1}
												</RankNumber>
												<GetDetail
													id={current.id}
													category={category}
												></GetDetail>
											</PoularBoxImg>
										</Link>
									</>
								))}
						</PopularWrapper>
					</AnimatePresence>

					<PrevBtn onClick={DecreaseIndex}>
						<MdNavigateBefore />
					</PrevBtn>
				</SliderContainer>
			)}
		</>
	);
}
