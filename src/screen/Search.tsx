import { useForm } from "react-hook-form";
import { Form, Input, SearchBoxContainer } from "../style/SearchStyles";
import { useSetRecoilState } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";
import {
	SEARCH_URL,
	SearchLogo,
	SearchKeywordState,
} from "../style/SearchStyles";

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
		navigate(search_keyword);
	}

	return (
		<>
			<SearchBoxContainer>
				<Form onSubmit={handleSubmit(handleFormSubmit)}>
					<Input
						{...register("input", { required: true })}
						placeholder="제목, 장르, 배우로 검색해보세요."
					></Input>
					<SearchLogo onClick={searchIconClick} src={SEARCH_URL} />
				</Form>
			</SearchBoxContainer>
			<Outlet></Outlet>
		</>
	);
}
