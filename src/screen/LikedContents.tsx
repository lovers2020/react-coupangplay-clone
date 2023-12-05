import { useRecoilValue } from "recoil";
import { movieLikedId, tvLikedId } from "../utils/utils";

export default function LikedContents() {
	const tvLiked = useRecoilValue(tvLikedId);
	const movieLiked = useRecoilValue(movieLikedId);

	console.log(movieLiked);
	console.log(tvLiked);

	return (
		<>
			<div>asdasdasdasdasd</div>
		</>
	);
}
