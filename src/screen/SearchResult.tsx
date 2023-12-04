import { useRecoilValue } from "recoil";
import { SearchKeywordState } from "../style/SearchStyles";
import { useQuery } from "react-query";
import { getSearchMovie, getSearchTv } from "../API";
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
					<Loading>Searching...</Loading>
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
												data={searchMovie}
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
												data={searchMovie2}
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
												data={searchTv}
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
												data={searchTv2}
												title="TV 프로그램 검색 결과"
												category="tv"
											></Slider>
										</MainWrapper>
									</>
								) : null}
							</>
						) : (
							<div style={{ height: "100vh" }}>
								<Title>{searchKeyword} has no result...</Title>
							</div>
						)}
					</>
				)}
			</SearchResultConatiner>
		</>
	);
}
