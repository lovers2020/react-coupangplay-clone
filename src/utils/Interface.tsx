export interface ITvDetails {
	name: string;
	id: number;
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
}
