import { useRecoilValue } from "recoil";
import { LOADING_IMG, movieLikedId, tvLikedId } from "../utils/utils";
import { useQueries } from "react-query";
import { getMovieDetail, getTvDetail } from "../API";
import { SearchResultConatiner } from "../style/SearchResultStyles";
import { Title } from "../componenets/style/PopularTop20Styles";
import { Loading, MainWrapper } from "../style/HomeStyles";
import Slider from "../componenets/Slider";

export default function LikedContents() {
	let tvData = [];
	let movieData = [];
	let tvIsLoading = true;
	let movieIsLoading = true;

	const tvLiked = useRecoilValue(tvLikedId);
	const movieLiked = useRecoilValue(movieLikedId);

	const tvDetail = useQueries(
		tvLiked.map((current) => ({
			queryKey: ["tvLiked", current],
			queryFn: () => getTvDetail(current),
			suspense: true,
		}))
	);
	const movieDetail = useQueries(
		movieLiked.map((current) => ({
			queryKey: ["movieLiked", current],
			queryFn: () => getMovieDetail(current),
			suspense: true,
		}))
	);
	console.log(tvDetail, movieDetail);
	const tvLength = tvDetail.length === 0;
	const movieLength = movieDetail.length === 0;

	console.log(tvLength, movieLength);
	if (!tvLength) {
		tvData = tvDetail.map((current) => current.data);
		tvIsLoading = tvDetail.some((current) => current.isLoading);
	}
	if (!movieLength) {
		movieData = movieDetail.map((current) => current.data);
		movieIsLoading = movieDetail.some((current) => current.isLoading);
	}
	console.log(tvIsLoading, movieIsLoading);
	console.log(tvData, movieData);

	return (
		<>
			<SearchResultConatiner>
				{tvLength && movieLength ? (
					<Title>찜한 콘텐츠가 없습니다.</Title>
				) : (
					<>
						{tvData && !tvIsLoading ? (
							<>
								<MainWrapper>
									<Slider
										data={tvData}
										title="찜한 TV 콘텐츠"
										category="tv"
									></Slider>
								</MainWrapper>
							</>
						) : null}
						{movieData && !movieIsLoading ? (
							<>
								<MainWrapper>
									<Slider
										data={movieData}
										title="찜한 영화 콘텐츠"
										category="movie"
									></Slider>
								</MainWrapper>
							</>
						) : null}
					</>
				)}
			</SearchResultConatiner>
		</>
	);
}
