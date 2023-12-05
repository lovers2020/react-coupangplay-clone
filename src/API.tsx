const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGQ0ZDc1MGMwMTQ2YjZjOTU1MDEwNGQxMGU2YTJlOCIsInN1YiI6IjY1NTVjZWE4ZDRmZTA0MDBhYzM2OTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7o0il6EgNl1qdkmO3p7a0FDxEVhrvlr14YysmVhn0oI",
	},
};
export function getTvTopRated() {
	return fetch(
		"https://api.themoviedb.org/3/tv/top_rated?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getTvPopular() {
	return fetch(
		"https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getTvAiringToday() {
	return fetch(
		"https://api.themoviedb.org/3/tv/airing_today?language=ko-KR&page=2",
		options
	).then((response) => response.json());
}
export function getTvOnTheAir() {
	return fetch(
		"https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=2",
		options
	).then((response) => response.json());
}
export function getTvDetail(id: number | string) {
	return fetch(
		`https://api.themoviedb.org/3/tv/${id}?language=ko-KR`,
		options
	).then((response) => response.json());
}
export function getTvDetailEn(id: number) {
	return fetch(
		`https://api.themoviedb.org/3/tv/${id}?language=en-US`,
		options
	).then((response) => response.json());
}
export function getTvImage(id: number) {
	return fetch(`https://api.themoviedb.org/3/tv/${id}/images`, options).then(
		(response) => response.json()
	);
}

// Movie
export function getMovieNow() {
	return fetch(
		"https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getMoviePopular() {
	return fetch(
		"https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getMovieUpcoming() {
	return fetch(
		"https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getMovieTopRated() {
	return fetch(
		"https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
		options
	).then((response) => response.json());
}
export function getMovieDetail(id: number | string) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
		options
	).then((response) => response.json());
}
export function getMovieDetailEn(id: number) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		options
	).then((response) => response.json());
}
export function getMovieImage(id: number) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}/images`,
		options
	).then((response) => response.json());
}
export function getSearch(id: string) {
	return fetch(
		`https://api.themoviedb.org/3/search/multi?query=${id}&include_adult=false&language=en-US&page=1`,
		options
	).then((response) => response.json());
}

// Search
export function getSearchMovie(id: string, page: number) {
	return fetch(
		`https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=${page}`,
		options
	).then((response) => response.json());
}
export function getSearchTv(id: string, page: number) {
	return fetch(
		`https://api.themoviedb.org/3/search/tv?query=${id}&include_adult=false&language=en-US&page=${page}`,
		options
	).then((response) => response.json());
}
