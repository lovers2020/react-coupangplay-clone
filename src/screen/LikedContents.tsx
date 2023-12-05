import { useRecoilValue } from "recoil";
import { LOADING_IMG, movieLikedId, tvLikedId } from "../utils/utils";
import { useQueries } from "react-query";
import { getMovieDetail, getTvDetail } from "../API";
import { SearchResultConatiner } from "../style/SearchResultStyles";
import { Title } from "../componenets/style/PopularTop20Styles";
import { Loading, MainWrapper } from "../style/HomeStyles";
import Slider from "../componenets/Slider";

export default function LikedContents() {
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
	let tvData = [];
	let movieData = [];
	if (!tvLength) {
		tvData = tvDetail.map((current) => current.data);
	}

	console.log(tvData);

	return (
		<>
			<SearchResultConatiner>
				{tvLength && movieLength ? (
					<Title>찜한 콘텐츠가 없습니다.</Title>
				) : (
					<>
						{!tvLength ? (
							<>
								<Title>찜한 TV 콘텐츠</Title>
								<MainWrapper>
									<Slider
										data={tvData}
										title="TV 프로그램 검색 결과"
										category="tv"
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
