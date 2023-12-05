import { useRecoilValue } from "recoil";
import { movieLikedId, tvLikedId } from "../utils/utils";
import { useQueries } from "react-query";
import { getMovieDetail, getTvDetail } from "../API";
import { SearchResultConatiner } from "../style/SearchResultStyles";
import { Title } from "../componenets/style/PopularTop20Styles";
import { MainWrapper } from "../style/HomeStyles";
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

	return (
		<>
			<SearchResultConatiner>
				{tvLength && movieLength ? (
					<div style={{ width: "100%", height: "50vh" }}>
						<Title>찜한 콘텐츠가 없습니다.</Title>
					</div>
				) : (
					<>
						{tvData && tvIsLoading ? null : (
							<>
								<MainWrapper>
									<Slider
										data={tvData}
										title="찜한 TV 콘텐츠"
										category="tv"
									></Slider>
								</MainWrapper>
							</>
						)}
						{movieData && movieIsLoading ? null : (
							<>
								<MainWrapper>
									<Slider
										data={movieData}
										title="찜한 영화 콘텐츠"
										category="movie"
									></Slider>
								</MainWrapper>
							</>
						)}
					</>
				)}
			</SearchResultConatiner>
		</>
	);
}
