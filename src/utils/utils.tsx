export function CreateImagePath(path: string, format?: string) {
	return `https://image.tmdb.org/t/p/${format ? format : "original"}/${path}`;
}
export const NOT_FOUND_URL =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";
export const LOADING_IMG =
	"https://png.pngtree.com/png-clipart/20220102/original/pngtree-cartoon-snail-loading-gif-dynamic-diagram-png-image_6992584.png";
