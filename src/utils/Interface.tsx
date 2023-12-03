export interface ITvDetails {
	name: string;
	id: number;
	title: string;
	vote_average: number;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	last_episode_to_air: {
		name: string;
		runtime: number;
	};
	first_air_date: string;
}

export interface ICommonInfo {
	backdrop_path: string;
	poster_path: string;
	title: string;
	name: string;
	overview: string;
	release_date: string;
	id: number;
	vote_average: number;
	genre_ids: number[];
}
