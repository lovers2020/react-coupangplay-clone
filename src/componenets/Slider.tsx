import { AnimatePresence } from "framer-motion";
import { Title } from "./style/PopularTop20Styles";
import {
	SliderBox,
	SliderContainer,
	SliderWrapper,
	rowVaritants,
} from "./style/SliderStyles";
import { useState } from "react";
import { NextBtn, PrevBtn } from "./style/SliderStyles";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { CreateImagePath } from "../utils/utils";
import GetDetail from "./common/getDetail";
import { Link } from "react-router-dom";

const offset = 6;

export default function Slider({ data, title, category }: any) {
	const [dir, setDir] = useState(1);
	const [index, setIndex] = useState(0);
	const [leaving, setLeaving] = useState(false);

	function IncreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(1);
		setIndex((prev) => (prev === 2 ? (prev = 0) : prev + 1));
	}
	function DecreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(-1);
		setIndex((prev) => (prev === 0 ? (prev = 2) : prev - 1));
	}
	function toggleLeaving() {
		setLeaving((prev) => !prev);
	}

	return (
		<>
			{!data ? null : (
				<SliderContainer>
					<Title>{title}</Title>

					<NextBtn onClick={IncreaseIndex}>
						<MdNavigateNext />
					</NextBtn>
					<AnimatePresence
						initial={false}
						onExitComplete={toggleLeaving}
						custom={dir}
					>
						<SliderWrapper
							custom={dir}
							variants={rowVaritants}
							initial="hidden"
							animate="visible"
							transition={{ type: "tween", duration: 0.7 }}
							exit="exit"
							key={index}
						>
							{data.results
								.slice(index * offset, index * offset + offset)
								.map((current: any) => (
									<>
										<Link to={category + current.id}>
											<SliderBox
												key={category + current.id}
												bgphoto={CreateImagePath(
													current.backdrop_path
														? current.backdrop_path
														: current.poster_path,
													"w500"
												)}
											>
												<GetDetail
													id={current.id}
												></GetDetail>
											</SliderBox>
										</Link>
									</>
								))}
						</SliderWrapper>
					</AnimatePresence>
					<PrevBtn onClick={DecreaseIndex}>
						<MdNavigateBefore />
					</PrevBtn>
				</SliderContainer>
			)}
		</>
	);
}
