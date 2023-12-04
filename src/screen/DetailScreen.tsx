import { useLocation } from "react-router-dom";
import {
	AddLike,
	AddLikeWrapper,
	DetailContainer,
	DetailFunction,
	DetailLogo,
	OverView,
} from "../style/DetailScreenStyles";
import { useQuery } from "react-query";
import { IDetails } from "../utils/Interface";
import {
	getMovieDetail,
	getMovieDetailEn,
	getMovieImage,
	getTvDetail,
	getTvDetailEn,
	getTvImage,
} from "../API";
import {
	MainBg,
	MainBgDetail,
	MainBgImg,
	MainBgTitle,
	PlayBtn,
} from "../componenets/style/BannerStyles";
import { Detail } from "../componenets/style/DetailStyles";
import { CreateImagePath } from "../utils/utils";
import { useEffect } from "react";

interface ITvLogo {
	logos: [
		{
			file_path: string;
			iso_639_1: string;
		}
	];
}

export function DetailScreen() {
	window.scrollTo(0, 0);
	const location = useLocation().pathname.slice(1, 3);

	let id = useLocation().pathname;
	if (location === "mo") id = id.slice(6);
	else id = id.slice(3);
	console.log(location, id);

	const { data: tvDetail, isLoading: tvDetailisLoading } = useQuery<IDetails>(
		["tvDetailScreen", id],
		() => getTvDetail(Number(id))
	);
	const { data: tvDetailEn } = useQuery<IDetails>(
		["tvDetailScreenEn", id],
		() => getTvDetailEn(Number(id))
	);
	const { data: movieDetail, isLoading: movieDetailisLoading } =
		useQuery<IDetails>(["movieDetailScreen", id], () =>
			getMovieDetail(Number(id))
		);
	const { data: movieDetailEn } = useQuery<IDetails>(
		["movieDetailScreenEn", id],
		() => getMovieDetailEn(Number(id))
	);
	const { data: tvLogo, isLoading: tvLogoisLoading } = useQuery<ITvLogo>(
		["tvLogo", id],
		() => getTvImage(Number(id))
	);
	const { data: movieLogo, isLoading: movieLogoisLoading } =
		useQuery<ITvLogo>(["movieLogo", id], () => getMovieImage(Number(id)));
	let logo: any = "";
	let genres: any = [{}];
	let runtime = 0;
	let genreLength = 0;
	let firstAirDate = "";
	let voteAverage = "";
	let overView = "";
	let backDropPath = "";
	console.log(movieLogo);

	if (
		!tvDetailisLoading &&
		tvDetail &&
		!tvLogoisLoading &&
		tvLogo &&
		location !== "mo"
	) {
		overView = tvDetail?.overview
			? tvDetail.overview.slice(0, 240) + ".."
			: tvDetailEn?.overview.slice(0, 240) + "..";
		logo = tvLogo.logos[0] ? tvLogo.logos[0].file_path : tvDetail.name;
		genres = tvDetail.genres;
		runtime = tvDetail.last_episode_to_air.runtime;
		genreLength = tvDetail.genres.length - 1;
		voteAverage = tvDetail?.vote_average.toFixed(1);
		firstAirDate = tvDetail.first_air_date.slice(0, 4);
		backDropPath = tvDetail.backdrop_path;
	} else if (
		!movieDetailisLoading &&
		movieDetail &&
		!movieLogoisLoading &&
		movieLogo &&
		location === "mo"
	) {
		overView = movieDetail?.overview
			? movieDetail.overview.slice(0, 240) + ".."
			: movieDetailEn?.overview.slice(0, 240) + "..";
		for (let i = 0; i < 20; i++) {
			if (movieLogo.logos[0]) {
				if (movieLogo.logos[i].iso_639_1 === "en") {
					logo = movieLogo.logos[i].file_path;
					break;
				}
			} else logo = movieDetail.title;
		}
		genres = movieDetail.genres;
		runtime = movieDetail.runtime;
		genreLength = movieDetail.genres.length - 1;
		voteAverage = movieDetail?.vote_average.toFixed(1);
		firstAirDate = movieDetail.release_date.slice(0, 4);
		backDropPath = movieDetail.backdrop_path;
	}
	console.log(genres);
	return (
		<>
			{!tvDetail && tvLogoisLoading && movieLogoisLoading ? null : (
				<DetailContainer>
					<MainBg>
						<MainBgDetail>
							{logo.slice(0, 1) === "/" ? (
								<DetailLogo
									bgphoto={CreateImagePath(
										String(logo),
										"w500"
									)}
								></DetailLogo>
							) : (
								<MainBgTitle>{logo}</MainBgTitle>
							)}

							<Detail>
								<svg
									viewBox="0 -150 1024 1024"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
								</svg>
								<span>{voteAverage}</span>•
								{
									<span>
										{genres.length !== 0
											? genres[0].name
											: "드라마"}{" "}
										• {runtime ? runtime : "40"}분 •{" "}
										{firstAirDate}
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
							<OverView>{overView}</OverView>
							<span style={{ color: "rgba(255,255,255,0.7)" }}>
								장르 :{" "}
								{genres.map(
									(current: any, index: number) =>
										current.name +
										(index !== genreLength ? ", " : "")
								)}
							</span>
						</MainBgDetail>
						<MainBgImg
							bgphoto={CreateImagePath(backDropPath)}
							width="90%"
							height="1200px"
						></MainBgImg>
					</MainBg>
				</DetailContainer>
			)}
		</>
	);
}
