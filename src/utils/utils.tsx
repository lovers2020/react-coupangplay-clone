import { atom } from "recoil";
export const SearchKeywordState = atom<string>({
	key: "searchKeyword",
	default: "",
});
export const tvLikedId = atom<string[]>({
	key: "tvLiked",
	default: [],
});
export const movieLikedId = atom<string[]>({
	key: "movieLiked",
	default: [],
});
export const SEARCH_URL =
	"https://assets.coupangplay.com/images/svg/search.svg";

export function CreateImagePath(path: string, format?: string) {
	return `https://image.tmdb.org/t/p/${format ? format : "original"}/${path}`;
}
export const NOT_FOUND_URL =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";
export const LOADING_IMG =
	"https://c.wallhere.com/photos/dc/ba/loading-174674.jpg!d";
