import { useQuery } from "react-query";
import { ICommonInfo } from "../utils/Interface";
import {
	getMovieNow,
	getMoviePopular,
	getMovieTopRated,
	getMovieUpcoming,
} from "../API";
import { Loading, MainWrapper } from "../style/HomeStyles";
import { Banner } from "../componenets/common/Banner";
import Category from "../componenets/Category";
import { useLocation } from "react-router-dom";
import PopularTop20 from "./../componenets/PopularTop20";
import Slider from "../componenets/Slider";

export default function Movie() {
	const {
		data: movieTop,
		isLoading: movieTopisLoading,
		refetch: movieToprefetch,
	} = useQuery<ICommonInfo>("movieTop", getMovieTopRated);
	const {
		data: moviePop,
		isLoading: moviePopisLoading,
		refetch: moviePoprefetch,
	} = useQuery<ICommonInfo>("moviePop", getMoviePopular);
	const {
		data: movieUpcoming,
		isLoading: movieUpcomingisLoading,
		refetch: movieUprefetch,
	} = useQuery<ICommonInfo>("movieUp", getMovieUpcoming);
	const {
		data: movieNow,
		isLoading: movieNowisLoading,
		refetch: movieNowrefetch,
	} = useQuery<ICommonInfo>("movieNow", getMovieNow);

	return (
		<>
			{movieTopisLoading ||
			moviePopisLoading ||
			movieUpcomingisLoading ||
			movieNowisLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Banner data={movieTop}></Banner>
					<Category key="category"></Category>
					<MainWrapper>
						<PopularTop20
							data={movieTop}
							category="movies"
						></PopularTop20>
						<Slider
							data={movieNow}
							title="현재 상영중인 영화"
							category="movies"
						></Slider>
						<Slider
							data={moviePop}
							title="인기있는 영화"
							category="movies"
						></Slider>
						<Slider
							data={movieUpcoming}
							title="다가오는 영화"
							category="movies"
						></Slider>
					</MainWrapper>
				</>
			)}
		</>
	);
}
