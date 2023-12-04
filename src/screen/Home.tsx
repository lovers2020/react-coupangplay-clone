import { useQuery } from "react-query";
import {
	getTvAiringToday,
	getTvOnTheAir,
	getTvPopular,
	getTvTopRated,
} from "../API";
import { Loading, MainWrapper } from "../style/HomeStyles";
import { Banner } from "../componenets/common/Banner";
import Category from "../componenets/Category";
import PopularTop20 from "../componenets/PopularTop20";
import { ICommonInfo } from "../utils/Interface";
import Slider from "../componenets/Slider";

export default function Home() {
	const { data: tvTopRated, isLoading: tvTopRatedisLoading } =
		useQuery<ICommonInfo>("tvTop", getTvTopRated);
	const { data: tvPopular, isLoading: tvPopularisLoading } =
		useQuery<ICommonInfo>("tvPop", getTvPopular);
	const { data: tvAiring, isLoading: tvAiringisLoading } =
		useQuery<ICommonInfo>("tvAir", getTvAiringToday);
	const { data: tvOnTheAir, isLoading: tvOnTheAirisLoading } =
		useQuery<ICommonInfo>("tvOnTheAir", getTvOnTheAir);

	return (
		<>
			{tvTopRatedisLoading ||
			tvPopularisLoading ||
			tvAiringisLoading ||
			tvOnTheAirisLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Banner data={tvTopRated} category="tv"></Banner>
					<Category key="category"></Category>
					<MainWrapper>
						<PopularTop20
							data={tvTopRated}
							category="tv"
						></PopularTop20>
						<Slider
							data={tvAiring}
							title="새로운 에피소드"
							category="tv"
						></Slider>
						<Slider
							data={tvPopular}
							title="인기있는 드라마"
							category="tv"
						></Slider>
						<Slider
							data={tvOnTheAir}
							title="On The Air"
							category="tv"
						></Slider>
					</MainWrapper>
				</>
			)}
		</>
	);
}
