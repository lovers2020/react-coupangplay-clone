import { CategoryContainer, CategoryTitle } from "./style/CategoryStyles";

const categotyList = [
	"모든 카테고리",
	"한국 TV 프로그램",
	"외국 TV 프로그램",
	" 한국 영화",
	"외국 영화",
	"액션",
	"로맨스",
	"코미디",
	"스릴러",
	"어드벤처",
	"범죄",
	"애니메이션",
	"예능",
	"판타지",
	"SF",
	"공포",
	"미스터리",
	"다큐멘터리",
	"패밀리",
];

export default function Category() {
	return (
		<>
			<CategoryContainer>
				{categotyList.map((i) => (
					<>{<CategoryTitle>{i}</CategoryTitle>}</>
				))}
			</CategoryContainer>
		</>
	);
}
