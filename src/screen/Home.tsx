import { useQuery } from "react-query";
import { getTvTopRated } from "../API";
import { Loading } from "../style/HomeStyles";
import { Banner } from "../componenets/Banner";

export default function Home() {
	const { data: tvTopRated, isLoading: tvTopRatedisLoading } = useQuery(
		"tvTop",
		getTvTopRated
	);

	return (
		<>
			{tvTopRatedisLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Banner data={tvTopRated}></Banner>
				</>
			)}
		</>
	);
}
