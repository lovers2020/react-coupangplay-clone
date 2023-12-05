import { useForm } from "react-hook-form";
import {
	Form,
	Input,
	SearchBoxContainer,
	SearchLogo,
} from "../style/SearchStyles";
import { useSetRecoilState } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";
import { SEARCH_URL, SearchKeywordState } from "../utils/utils";

export default function SearchBox() {
	const navigate = useNavigate();
	const setSearchKeyword = useSetRecoilState(SearchKeywordState);
	const { register, setValue, setFocus, handleSubmit } = useForm();

	function searchIconClick() {
		setFocus("input");
	}

	function handleFormSubmit(data: any) {
		const search_keyword = data.input;

		setSearchKeyword(search_keyword);
		setValue("input", "");
		navigate("result/" + search_keyword);
	}

	return (
		<>
			<SearchBoxContainer>
				<Form onSubmit={handleSubmit(handleFormSubmit)}>
					<Input
						{...register("input", { required: true })}
						placeholder="영화 제목, TV 프로그램, 장르로 검색해보세요."
					></Input>
					<SearchLogo onClick={searchIconClick} src={SEARCH_URL} />
				</Form>
			</SearchBoxContainer>
			<Outlet></Outlet>
		</>
	);
}
