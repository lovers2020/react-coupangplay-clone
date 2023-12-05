import { useRecoilValue } from "recoil";
import { movieLikedId, tvLikedId } from "../utils/utils";
import { useQueries } from "react-query";
import { getMovieDetail, getTvDetail } from "../API";
import { SearchResultConatiner } from "../style/SearchResultStyles";

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
	console.log(tvDetail[0].isLoading);

	return (
		<>
			<SearchResultConatiner>
				{/* {tvDetail[0].isLoading && movieDetail[0].isLoading : } */}
				<div>asdasdasdasdasd</div>
			</SearchResultConatiner>
		</>
	);
}
