import { useQuery } from "react-query";
import { getTvAiringToday, getTvPopular, getTvTopRated } from "../API";
import { Loading } from "../style/HomeStyles";
import { Banner } from "../componenets/common/Banner";
import Category from "../componenets/Category";
import PopularTop20 from "../componenets/PopularTop20";
import { ICommonInfo } from "../utils/Interface";
import Slider from "../componenets/Slider";
import styled from "styled-components";
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;
export default function Home() {
	const { data: tvTopRated, isLoading: tvTopRatedisLoading } =
		useQuery<ICommonInfo>("tvTop", getTvTopRated);
	const { data: tvPopular, isLoading: tvPopularisLoading } =
		useQuery<ICommonInfo>("tvPop", getTvPopular);
	const { data: tvAiring, isLoading: tvAiringisLoading } =
		useQuery<ICommonInfo>("tvAir", getTvAiringToday);

	return (
		<>
			{tvTopRatedisLoading || tvPopularisLoading || tvAiringisLoading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<Banner data={tvTopRated}></Banner>
					<Category key="category"></Category>
					<Wrapper>
						<PopularTop20 data={tvPopular}></PopularTop20>
						<Slider data={tvAiring}></Slider>
					</Wrapper>
				</>
			)}
		</>
	);
}
