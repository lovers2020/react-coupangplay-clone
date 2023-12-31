import { useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { getSearchMovie, getSearchTv } from "../API";
import { Loading, MainWrapper } from "./../style/HomeStyles";
import { useEffect } from "react";
import { Title } from "../componenets/style/PopularTop20Styles";
import Slider from "../componenets/Slider";
import { SearchResultConatiner } from "../style/SearchResultStyles";
import { LOADING_IMG, SearchKeywordState } from "../utils/utils";

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
	} = useQuery(["searchResultMovie", 2], () =>
		getSearchMovie(searchKeyword, 2)
	);
	const {
		data: searchTv,
		isLoading: searchTvisLoading,
		refetch: searchTvrefetch,
	} = useQuery(["searchResultTv", 1], () => getSearchTv(searchKeyword, 1));
	const {
		data: searchTv2,
		isLoading: searchTvisLoading2,
		refetch: searchTvrefetch2,
	} = useQuery(["searchResultTv", 2], () => getSearchTv(searchKeyword, 2));

	useEffect(() => {
		searchMovierefetch();
		searchMovierefetch2();
		searchTvrefetch();
		searchTvrefetch2();
	}, [searchKeyword]);

	const noResult =
		searchMovie?.results.length +
		searchMovie2?.results.length +
		searchTv?.results.length +
		searchTv2?.results.length;
	return (
		<>
			<SearchResultConatiner>
				{searchMovieisLoading ||
				searchMovieisLoading2 ||
				searchTvisLoading ||
				searchTvisLoading2 ? (
					<Loading bgphoto={LOADING_IMG}>Searching...</Loading>
				) : (
					<>
						{noResult ? (
							<>
								{searchMovie.results.length !== 0 ? (
									<>
										<Title>
											"{searchKeyword}" search result
										</Title>
										<MainWrapper>
											<Slider
												data={searchMovie.results}
												title="영화 검색 결과"
												category="movie"
											></Slider>
										</MainWrapper>
									</>
								) : null}
								{searchMovie2.results.length !== 0 ? (
									<>
										<Title>
											"{searchKeyword}" search result
										</Title>
										<MainWrapper>
											<Slider
												data={searchMovie2.results}
												title="영화 검색 결과"
												category="movie"
											></Slider>
										</MainWrapper>
									</>
								) : null}
								{searchTv.results.length !== 0 ? (
									<>
										<Title>
											"{searchKeyword}" search result
										</Title>
										<MainWrapper>
											<Slider
												data={searchTv.results}
												title="TV 프로그램 검색 결과"
												category="tv"
											></Slider>
										</MainWrapper>
									</>
								) : null}
								{searchTv2.results.length !== 0 ? (
									<>
										<Title>
											"{searchKeyword}" search result
										</Title>
										<MainWrapper>
											<Slider
												data={searchTv2.results}
												title="TV 프로그램 검색 결과"
												category="tv"
											></Slider>
										</MainWrapper>
									</>
								) : null}
							</>
						) : (
							<Title>{searchKeyword} has no result...</Title>
						)}
					</>
				)}
			</SearchResultConatiner>
		</>
	);
}
