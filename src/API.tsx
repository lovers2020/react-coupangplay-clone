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
export function getTvDetail(id: number) {
	return fetch(
		`https://api.themoviedb.org/3/tv/${id}}?language=ko-KR`,
		options
	).then((response) => response.json());
}
export function getTvAiringToday() {
	return fetch(
		"https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
		options
	).then((response) => response.json());
}
export function getTvImage(id: number) {
	return fetch(`https://api.themoviedb.org/3/tv/${id}/images`, options).then(
		(response) => response.json()
	);
}
