import { useRecoilValue } from "recoil";
import { SearchKeywordState } from "../style/SearchStyles";
import { useQuery } from "react-query";
import { getSearch } from "../API";
import { Loading } from "./../style/HomeStyles";
import { SearchResultGrid } from "../style/SearchResultStyles";
import { useEffect } from "react";
import { SliderBox } from "../componenets/style/SliderStyles";
import { CreateImagePath } from "../utils/utils";
const NOT_FOUND_URL =
	"https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80";

export default function SearchResult() {
	const searchKeyword = useRecoilValue(SearchKeywordState);

	const { data, isLoading, refetch } = useQuery("searchResult", () =>
		getSearch(searchKeyword)
	);
	useEffect(() => {
		refetch();
	}, [searchKeyword]);
	return (
		<>
			{isLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<SearchResultGrid>
					{data.results.slice(0, 20).map((current: any) => (
						<SliderBox
							bgphoto={
								current.backdrop_path != null
									? CreateImagePath(current.backdrop_path)
									: current.poster_path != null
									? CreateImagePath(current.poster_path)
									: NOT_FOUND_URL
							}
						></SliderBox>
					))}
				</SearchResultGrid>
			)}
		</>
	);
}
