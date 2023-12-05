import { useRecoilValue } from "recoil";
import { movieLikedId, tvLikedId } from "../utils/utils";
import { useQueries } from "react-query";
import { getTvDetail } from "../API";

export default function LikedContents() {
	const tvLiked = useRecoilValue(tvLikedId);
	const movieLiked = useRecoilValue(movieLikedId);
	const tvDetail = useQueries(
		tvLiked.map((current) => ({
			queryKey: ["tvLiked", current],
			queryFn: () => getTvDetail(current),
		}))
	);
	console.log(tvDetail);
	console.log(movieLiked);
	console.log(tvLiked);

	return (
		<>
			<div>asdasdasdasdasd</div>
		</>
	);
}
