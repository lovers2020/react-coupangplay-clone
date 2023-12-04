import { useRecoilValue } from "recoil";
import { SearchKeywordState } from "../style/SearchStyles";
import { useQuery } from "react-query";
import { getSearchMovie } from "../API";
import { Loading, MainWrapper } from "./../style/HomeStyles";
import { useEffect } from "react";
import { Title } from "../componenets/style/PopularTop20Styles";
import Slider from "../componenets/Slider";
import { SearchResultConatiner } from "../style/SearchResultStyles";

export default function SearchResult() {
	const searchKeyword = useRecoilValue(SearchKeywordState);
	const {
		data: searchMovie,
		isLoading: searchMovieisLoading,
		refetch: searchMovierefetch,
	} = useQuery(["searchResultMovie", 1], () =>
		getSearchMovie(searchKeyword, 1)
	);
	const {
		data: searchMovie2,
		isLoading: searchMovieisLoading2,
		refetch: searchMovierefetch2,
	} = useQuery(["searchResultMovie", 1], () =>
		getSearchMovie(searchKeyword, 2)
	);
	const {
		data: searchTv,
		isLoading: searchTvisLoading,
		refetch: searchTvrefetch,
	} = useQuery(["searchResultTv", 1], () => getSearchMovie(searchKeyword, 1));
	const {
		data: searchTv2,
		isLoading: searchTvisLoading2,
		refetch: searchTvrefetch2,
	} = useQuery(["searchResultTv", 2], () => getSearchMovie(searchKeyword, 2));

	useEffect(() => {
		searchMovierefetch();
		searchMovierefetch2();
		searchTvrefetch();
		searchTvrefetch2();
	}, [searchKeyword]);

	const noResult =
		searchMovie?.total_results +
		searchMovie2?.total_results +
		searchTv?.total_results +
		searchTv2?.total_results;
	console.log(searchTv);
	return (
		<>
			<SearchResultConatiner>
				{searchMovieisLoading ||
				searchMovieisLoading2 ||
				searchTvisLoading ||
				searchTvisLoading2 ? (
					<Loading>Searching...</Loading>
				) : (
					<>
						{searchMovie.total_results !== 0 ? (
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
						) : null}
						{searchMovie2.total_results !== 0 ? (
							<>
								<Title>"{searchKeyword}" search result</Title>
								<MainWrapper>
									<Slider
										data={searchMovie2}
										title="영화 검색 결과"
										category="movie"
									></Slider>
								</MainWrapper>
							</>
						) : null}
						{searchTv.total_results !== 0 ? (
							<>
								<Title>"{searchKeyword}" search result</Title>
								<MainWrapper>
									<Slider
										data={searchTv}
										title="TV 프로그램 검색 결과"
										category="tv"
									></Slider>
								</MainWrapper>
							</>
						) : null}
						{searchTv2.total_results !== 0 ? (
							<>
								<Title>"{searchKeyword}" search result</Title>
								<MainWrapper>
									<Slider
										data={searchTv2}
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
