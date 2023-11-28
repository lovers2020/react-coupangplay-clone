const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGQ0ZDc1MGMwMTQ2YjZjOTU1MDEwNGQxMGU2YTJlOCIsInN1YiI6IjY1NTVjZWE4ZDRmZTA0MDBhYzM2OTM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7o0il6EgNl1qdkmO3p7a0FDxEVhrvlr14YysmVhn0oI",
	},
};
export function getTvTopRated() {
	fetch(
		"https://api.themoviedb.org/3/tv/top_rated?language=ko-KR&page=1",
		options
	)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}
