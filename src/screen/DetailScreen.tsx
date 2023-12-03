import { AiOutlineShareAlt } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import {
	AddLike,
	AddLikeWrapper,
	DetailContainer,
	DetailFunction,
	DetailLogo,
	OverView,
} from "../style/DetailScreen";
import { useQuery } from "react-query";
import { ITvDetails } from "../utils/Interface";
import { getTvDetail, getTvImage } from "../API";
import {
	MainBg,
	MainBgDetail,
	MainBgImg,
	MainBgTitle,
	PlayBtn,
} from "../componenets/style/BannerStyles";
import { Detail } from "../componenets/style/Detail";
import { CreateImagePath } from "../utils/utils";
import { useScroll } from "framer-motion";

interface ITvLogo {
	logos: [
		{
			file_path: string;
		}
	];
}

export function DetailScreen() {
	window.scrollTo(0, 0);
	const id = useLocation().pathname.slice(3);

	const { data: tvDetail } = useQuery<ITvDetails>(["DetailScreen", id], () =>
		getTvDetail(Number(id))
	);
	const { data: tvLogo } = useQuery<ITvLogo>(["tvLogo", id], () =>
		getTvImage(Number(id))
	);
	const logo = tvLogo?.logos.length ? tvLogo?.logos[0].file_path : null;

	let genres = "";
	let runtime = 0;
	function getDetails() {
		if (tvDetail) {
			genres = tvDetail.genres[0].name;
			runtime = tvDetail.last_episode_to_air.runtime;
		}
	}
	getDetails();
	console.log(tvDetail);
	return (
		<>
			{!tvDetail ? null : (
				<DetailContainer>
					<MainBg>
						<MainBgDetail>
							{logo ? (
								<DetailLogo
									bgphoto={CreateImagePath(
										String(logo),
										"w500"
									)}
								></DetailLogo>
							) : (
								<MainBgTitle>{tvDetail?.name}</MainBgTitle>
							)}

							<Detail>
								<svg
									viewBox="0 -150 1024 1024"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
								</svg>
								<span>{tvDetail?.vote_average.toFixed(1)}</span>
								•
								{
									<span>
										{genres ? genres : "드라마"} •{" "}
										{runtime ? runtime : "40"}분 •{" "}
										{tvDetail.first_air_date.slice(0, 4)}
									</span>
								}
							</Detail>
							<DetailFunction>
								<PlayBtn>
									<svg
										viewBox="0 0 448 512"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
									</svg>
									<span>재생하기</span>
								</PlayBtn>
								<AddLikeWrapper>
									<AddLike>
										<span>+</span>
									</AddLike>
									<p>찜한 컨텐츠</p>
								</AddLikeWrapper>
								<AddLikeWrapper>
									<svg
										viewBox="0 0 1024 1024"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path>
									</svg>
									<p>공유하기</p>
								</AddLikeWrapper>
							</DetailFunction>
							<OverView style={{ color: "white" }}>
								{tvDetail.overview}
							</OverView>
						</MainBgDetail>
						<MainBgImg
							bgphoto={CreateImagePath(tvDetail.backdrop_path)}
							width="90%"
							height="1200px"
						></MainBgImg>
					</MainBg>
				</DetailContainer>
			)}
		</>
	);
}
