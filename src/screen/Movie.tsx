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
import PopularTop20 from "./../componenets/PopularTop20";
import Slider from "../componenets/Slider";

export default function Movie() {
	const { data: movieTop, isLoading: movieTopisLoading } =
		useQuery<ICommonInfo>("movieTop", getMovieTopRated);
	const { data: moviePop, isLoading: moviePopisLoading } =
		useQuery<ICommonInfo>("moviePop", getMoviePopular);
	const { data: movieUpcoming, isLoading: movieUpcomingisLoading } =
		useQuery<ICommonInfo>("movieUp", getMovieUpcoming);
	const { data: movieNow, isLoading: movieNowisLoading } =
		useQuery<ICommonInfo>("movieNow", getMovieNow);

	return (
		<>
			{movieTopisLoading ||
			moviePopisLoading ||
			movieUpcomingisLoading ||
			movieNowisLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Banner data={movieTop} category="movie"></Banner>
					<Category key="category"></Category>
					<MainWrapper>
						<PopularTop20
							data={movieTop}
							category="movie"
						></PopularTop20>
						<Slider
							data={movieNow}
							title="현재 상영중인 영화"
							category="movie"
						></Slider>
						<Slider
							data={moviePop}
							title="인기있는 영화"
							category="movie"
						></Slider>
						<Slider
							data={movieUpcoming}
							title="다가오는 영화"
							category="movie"
						></Slider>
					</MainWrapper>
				</>
			)}
		</>
	);
}
