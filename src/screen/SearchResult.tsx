import { useRecoilValue } from "recoil";
import { SearchKeywordState } from "../style/SearchStyles";
import { useQuery } from "react-query";
import { getSearchMovie } from "../API";
import { Loading, MainWrapper } from "./../style/HomeStyles";
import { useEffect } from "react";
import { Title } from "../componenets/style/PopularTop20Styles";
import Slider from "../componenets/Slider";

export default function SearchResult() {
	const searchKeyword = useRecoilValue(SearchKeywordState);

	const {
		data: searchMovie,
		isLoading: searchMovieisLoading,
		refetch: searchMovierefetch,
	} = useQuery("searchResultMovie", () => getSearchMovie(searchKeyword, 1));
	useEffect(() => {
		searchMovierefetch();
	}, [searchKeyword]);
	return (
		<>
			{searchMovieisLoading ? (
				<Loading>Searching...</Loading>
			) : (
				<>
					<Title>"{searchKeyword}" search result</Title>
					<MainWrapper>
						<Slider
							data={searchMovie}
							title="영화 검색 결과"
							category="movie"
						></Slider>
					</MainWrapper>
				</>
			)}
		</>
	);
}
