export function CreateImagePath(path: string, format?: string) {
	return `https://image.tmdb.org/t/p/${format ? format : "original"}/${path}`;
}
export const NOT_FOUND_URL =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";
