import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateImagePath } from "../utils/utils";
import {
	Detail,
	MainBg,
	MainBgDetail,
	MainBgImg,
	MainBgTitle,
	NextBtn,
	PageDots,
	PageDotsContainer,
	PlayBtn,
	PrevBtn,
	Slider,
	Wrapper,
	rowVaritants,
} from "./style/BannerStyles";
import { useState } from "react";
import { useQuery } from "react-query";
import { ITvDetails } from "../utils/Interface";
import { getTvDetail } from "../API";
import { Loading } from "../style/HomeStyles";

export function Banner({ data }: any) {
	const pageLength = 11;
	const [dir, setDir] = useState(1);
	const [index, setIndex] = useState(0);
	const [leaving, setLeaving] = useState(false);
	const id = data.results[index].id;

	function IncreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(1);
		setIndex((prev) => (prev === pageLength ? (prev = 0) : prev + 1));
	}
	function DecreaseIndex() {
		if (leaving) return;
		setLeaving(true);
		setDir(-1);
		setIndex((prev) => (prev === 0 ? (prev = pageLength) : prev - 1));
	}
	const toggleLeaving = () => {
		setLeaving((prev) => !prev);
	};
	function changeIndex(pageNumber: number) {
		if (pageNumber > index) setDir(1);
		else setDir(-1);

		setLeaving((prev) => !prev);
		setIndex(pageNumber);
	}

	const {
		data: tvDetail,
		isLoading: tvDetailisLoading,
		refetch,
	} = useQuery<ITvDetails>("tvDetail", () => getTvDetail(id));
	let genres = "";
	let runtime = 0;
	const getDetails = () => {
		if (!tvDetailisLoading && tvDetail) {
			genres = tvDetail.genres[0].name;
			runtime = tvDetail.last_episode_to_air.runtime;
		}
	};
	useEffect(() => {
		refetch();
	}, [index]);
	getDetails();
	console.log(index, leaving);
	return (
		<>
			{tvDetailisLoading ? (
				<Loading>Loading..</Loading>
			) : (
				<Slider>
					<NextBtn onClick={IncreaseIndex}>
						<MdNavigateNext />
					</NextBtn>
					<AnimatePresence
						initial={false}
						onExitComplete={toggleLeaving}
						custom={dir}
					>
						<Wrapper
							custom={dir}
							variants={rowVaritants}
							initial="hidden"
							animate="visible"
							transition={{ type: "tween", duration: 1 }}
							exit="exit"
							key={index}
						>
							{data.results
								.slice(index, index + 1)
								.map((current: any) => (
									<>
										<MainBg>
											<MainBgDetail key={index}>
												<MainBgTitle>
													{current.name}
												</MainBgTitle>
												<Detail>
													<svg
														viewBox="0 -150 1024 1024"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
													</svg>
													<span>
														{current.vote_average.toFixed(
															1
														)}
													</span>
													•
													{
														<span>
															{genres} •{" "}
															{runtime
																? runtime
																: "40"}
															분
														</span>
													}
												</Detail>
												<PlayBtn>
													<svg
														viewBox="0 0 448 512"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
													</svg>
													<span>재생하기</span>
												</PlayBtn>
											</MainBgDetail>
											<MainBgImg
												key={current}
												bgphoto={CreateImagePath(
													current.backdrop_path
												)}
											></MainBgImg>
										</MainBg>

										<PageDotsContainer>
											<>
												{[
													0, 1, 2, 3, 4, 5, 6, 7, 8,
													9, 10, 11,
												].map((i) => (
													<PageDots
														onClick={() =>
															changeIndex(i)
														}
														index={index}
													></PageDots>
												))}
											</>
										</PageDotsContainer>
									</>
								))}
						</Wrapper>
					</AnimatePresence>

					<PrevBtn onClick={DecreaseIndex}>
						<MdNavigateBefore />
					</PrevBtn>
				</Slider>
			)}
		</>
	);
}
