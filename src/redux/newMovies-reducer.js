const INICIALIZED_NEW_MOVIE = "INICIALIZED_NEW_MOVIE";

let initialState = {
    sliderNewMovie: [
        {
            id: 1,
            name: 'Кунг-фу Панда 4',
            rating: '7.5',
            year: 2024,
            season: '4 сезон',
            label: 'Премьера',
            duration:'1 часа 33 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F661a5a856eab78fa721f94c9.jpg&w=425&q=80'
        },
        {
            id: 2,
            name: 'Дюна: Часть вторая',
            rating: '8.3',
            year: 2024,
            season: null,
            label: 'Новинка',
            duration:'2 часа 45 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65f819d7fb2312107a7b39c9.jpg&w=425&q=80'
        },
        {
            id: 3,
            name: 'Американское чтиво',
            rating: '8.0',
            year: 2024,
            season: null,
            label: 'Эксклюзив',
            duration:'1 час 56 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65f820aafb2312107a7fdaec.jpg&w=425&q=80'
        },
        {
            id: 4,
            name: 'В космосе',
            rating: '7.8',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'1 часа 48 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F660a5e6e16b6563e4d65bcea.jpg&w=425&q=80'
        },
        {
            id: 5,
            name: 'Сёгун',
            rating: '9.7',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'7 часов 48 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65e8118346cee3bdb4cc3a75.jpg&w=425&q=80'
        },
        {
            id: 6,
            name: 'Рипли',
            rating: '8.2',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'2 часа 45 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F6616d3fb6eab78fa72cb270a.jpg&w=425&q=80'
        },
        {
            id: 7,
            name: 'Паразит: Серые',
            rating: '8.0',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'2 часа 29 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F661e543e6eab78fa72fff2aa.jpg&w=425&q=80'
        },
        {
            id: 8,
            name: 'Фоллаут',
            rating: '9.3',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'3 часа 15 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F662237b4b6bfdf694acc6c87.jpg&w=425&q=80'
        }
    ]
};

const newMoviesReducer =(state = initialState, action) => {
    switch (action.type) {
        case INICIALIZED_NEW_MOVIE:
            return {
                ...state
            }
        default:
            return state;
    }
}
export const initializedNewMovieAC = () => ({type: INICIALIZED_NEW_MOVIE});


export const initializedNewMovies = () => {
    return (dispatch) => {
        dispatch(initializedNewMovieAC());
    };
}
export default newMoviesReducer;