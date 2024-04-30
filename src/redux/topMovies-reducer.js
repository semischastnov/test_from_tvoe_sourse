const INICIALIZED_TOP_MOVIE = "INICIALIZED_TOP_MOVIE";

let initialState = {
    sliderTopMovie: [
        {
            id: 1,
            name: 'Кунг-фу Панда 4',
            rating: '7.5',
            year: 2024,
            season: '4 сезон',
            label: 'Премьера',
            duration:'1 часа 33 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F661a5a856eab78fa721f94c9.jpg&w=425&q=80',
            imgNotShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded1.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded1.svg'
        },
        {
            id: 2,
            name: 'Дюна: Часть вторая',
            rating: '8.3',
            year: 2024,
            season: null,
            label: 'Новинка',
            duration:'2 часа 45 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65f819d7fb2312107a7b39c9.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded2.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded2.svg'
        },
        {
            id: 3,
            name: 'Американское чтиво',
            rating: '8.0',
            year: 2024,
            season: null,
            label: 'Эксклюзив',
            duration:'1 час 56 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65f820aafb2312107a7fdaec.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded3.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded3.svg'
        },
        {
            id: 4,
            name: 'В космосе',
            rating: '7.8',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'1 часа 48 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F660a5e6e16b6563e4d65bcea.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded4.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded4.svg'
        },
        {
            id: 5,
            name: 'Сёгун',
            rating: '9.7',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'7 часов 48 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65e8118346cee3bdb4cc3a75.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded5.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded5.svg'
        },
        {
            id: 6,
            name: 'Рипли',
            rating: '8.2',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'2 часа 45 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F6616d3fb6eab78fa72cb270a.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded6.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded6.svg'
        },
        {
            id: 7,
            name: 'Паразит: Серые',
            rating: '8.0',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'2 часа 29 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F661e543e6eab78fa72fff2aa.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded7.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded7.svg'
        },
        {
            id: 8,
            name: 'Фоллаут',
            rating: '9.3',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'3 часа 15 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F662237b4b6bfdf694acc6c87.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded8.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded8.svg'
        },
        {
            id: 9,
            name: 'Паразит: Серые ДУБЛЬ',
            rating: '8.0',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'2 часа 29 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F661e543e6eab78fa72fff2aa.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded9.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded9.svg'
        },
        {
            id: 10,
            name: 'Фоллаут ДУБЛЬ',
            rating: '9.3',
            year: 2024,
            season: null,
            label: 'Премьера',
            duration:'3 часа 15 мин',
            img: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F662237b4b6bfdf694acc6c87.jpg&w=425&q=80',
            imgNotShaded:'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgNotShaded10.svg',
            imgShaded: 'https://raw.githubusercontent.com/semischastnov/numbers/333c07305b87375ba26e74b2785f3b0f9a9d94a7/imgShaded10.svg'
        }
    ]
};

const topMoviesReducer =(state = initialState, action) => {
    switch (action.type) {
        case INICIALIZED_TOP_MOVIE:
            return {
                ...state
            }
        default:
            return state;
    }
}
export const initializedTopMovieAC = () => ({type: INICIALIZED_TOP_MOVIE});


export const initializedTopMovies = () => {
    return (dispatch) => {
        dispatch(initializedTopMovieAC());
    };
}
export default topMoviesReducer;