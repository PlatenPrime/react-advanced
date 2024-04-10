import { Action, Reducer } from "redux"

interface Movie {
	id: number
	title: string
	popularity: number
	overview: string
}


interface MovieState {
	top: Movie[]
}




const initialState: MovieState = {
	top: [
		{ id: 1, title: 'The Shawshank Redemption', popularity: 98, overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
		{ id: 2, title: 'The Godfather', popularity: 99, overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
		{ id: 3, title: "The Godfather: Part II", popularity: 99, overview: 'The early life and career of Vito Corleone in 1920s New York City is portrayed while he plays the角色 of Don of the Corleone family.' },
		{ id: 4, title: "The Dark Knigth", popularity: 98, overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with his.NotFounding plan to help the dead' },
	]
}



const  moviesReducer : Reducer<MovieState, Action>  = (state, action) {
	return initialState;
}


export default rootReducer;