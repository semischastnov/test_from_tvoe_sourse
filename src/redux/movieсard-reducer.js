const INICIALIZED_MOVIE_CARD = "INICIALIZED_MOVIE_CARD";
const GET_MOVIE_CARD_BY_ID = "GET_MOVIE_CARD_BY_ID";

let initialState = {
    sliderMovieCard: [
        {
            id: 1,
            name: 'Легенда об Аанге',
            rating: '8.3',
            year: 2024,
            genre: 'Фэнтази',
            country: 'США',
            ageLimit: '16+',
            season: '1 сезон',
            duration: '2 часа 37 минут',
            description: 'Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.',
            descriptionLarge: 'В мире существуют народы четырех стихий: огня, воды, земли и воздуха. Представитель народа огня решил поработить остальные народы. Спасти мир и прекратить войну подвластно только аватару, повелевающему всеми четырьмя стихиями. Ответственность внезапно ложится на плечи двенадцатилетнего Аанга, которому предстоит отправиться в опасное путешествие.',
            img: {
                large: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65c09f39286b6ad52ac24ce3.jpg&w=1380&q=80',
                small: "https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65e8119346cee3bdb4cc3ca3.jpg&w=140&q=75",
                logoName: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F660d862516b6563e4df09091.png&w=640&q=80'
            },
            reviews: [
                {
                    userId: 1,
                    user: 'Николай',
                    data: '10 мая 2023',
                    ratingUser: '9',
                    text: 'БлаБлаБла'
                },
                {
                    userId: 2,
                    user: 'Николай',
                    data: '10 мая 2023',
                    ratingUser: '9',
                    text: 'Легенда об Аанге" - это удивительный и захватывающий сериал, который завоевал сердца миллионов зрителей по всему миру. Этот мультсериал не просто рассказывает историю детства и подростковых приключениях главного героя, но и обладает глубоким смыслом и мудрыми уроками.\n' +
                        '\n' +
                        'Персонажи сериала разнообразны и уникальны, каждый из них имеет свои сильные и слабые стороны, что делает их реалистичными и интересными для аудитории. Аанг - это не просто мастер боевых искусств, но и настоящий мудрец и духовный лидер, способный учить и вдохновлять своих друзей и сторонников.\n' +
                        '\n' +
                        'Одной из особых черт сериала является его внимание к важным жизненным ценностям, таким как дружба, верность, мужество и любовь. Сюжет развивается постепенно, увлекая зрителя в захватывающие приключения и опасные сражения. Графика и анимация на высочайшем уровне, удивляют красотой и детальностью.\n' +
                        '\n' +
                        '"Легенда об Аанге" - это не просто мультсериал для детей, это произведение искусства, способное заинтересовать и взрослую аудиторию. Он затрагивает важные темы, такие как природа, баланс и гармония в мире, и обращает внимание на важность своей роли в сохранении планеты.\n' +
                        '\n' +
                        'В целом, "Легенда об Аанге" - это шедевр анимационного искусства, который заслуживает признания и любви зрителей. Он оставляет глубокий след в душе каждого, кто его смотрел, и напоминает о важности дружбы, веры в себя и мире в целом. Рекомендую этот сериал всем тем, кто хочет вдохновиться смыслом жизни b прочувствовать настоящую магию мультфильмов.'
                },
                {
                    userId: 3,
                    user: 'Николай',
                    data: '10 мая 2023',
                    ratingUser: '9',
                    text: 'БлаБлаБла'
                },
                {
                    userId: 4,
                    user: 'Николай',
                    data: '10 мая 2023',
                    ratingUser: '9',
                    text: 'БлаБлаБла'
                },
                {
                    userId: 5,
                    user: 'Николай',
                    data: '10 мая 2023',
                    ratingUser: '9',
                    text: 'БлаБлаБла'
                }
            ],
            seasons: {
                s0: {
                    s0e1: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/trailer.jpg?raw=true',
                        duration: '1:54',
                        number: 1,
                        viewed: 'Просмотрено'
                    }
                },
                s1: {
                    s1e1: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e1.jpg?raw=true',
                        duration: '43:54',
                        number: 1,
                        viewed: 'Просмотрено'
                    },
                    s1e2: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e2.jpg?raw=true',
                        duration: '43:54',
                        number: 2,
                        viewed: 'Просмотрено'
                    },
                    s1e3: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e3.jpg?raw=true',
                        duration: '43:54',
                        number: 3,
                        viewed: 'Просмотрено'
                    },
                    s1e4: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e4.jpg?raw=true',
                        duration: '43:54',
                        number: 4,
                        viewed: 'Просмотрено'
                    },
                    s1e5: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e5.jpg?raw=true',
                        duration: '43:54',
                        number: 5,
                        viewed: 'Просмотрено'
                    },
                    s1e6: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e6.jpg?raw=true',
                        duration: '43:54',
                        number: 6,
                        viewed: 'Просмотрено'
                    },
                    s1e7: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e7.jpg?raw=true',
                        duration: '43:54',
                        number: 7,
                        viewed: 'Просмотрено'
                    },
                    s1e8: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s1e8.jpg?raw=true',
                        duration: '43:54',
                        number: 8,
                        viewed: 'Просмотрено'
                    }
                },
                s2: {
                    s2e1: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e1.jpg?raw=true',
                        duration: '43:54',
                        number: 1,
                        viewed: 'Просмотрено'
                    },
                    s2e2: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e2.jpg?raw=true',
                        duration: '43:54',
                        number: 2,
                        viewed: 'Просмотрено'
                    },
                    s2e3: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e3.jpg?raw=true',
                        duration: '43:54',
                        number: 3,
                        viewed: 'Просмотрено'
                    },
                    s2e4: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e4.jpg?raw=true',
                        duration: '43:54',
                        number: 4,
                        viewed: 'Просмотрено'
                    },
                    s2e5: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e5.jpg?raw=true',
                        duration: '43:54',
                        number: 5,
                        viewed: 'Просмотрено'
                    },
                    s2e6: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e6.jpg?raw=true',
                        duration: '43:54',
                        number: 6,
                        viewed: 'Просмотрено'
                    },
                    s2e7: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e7.jpg?raw=true',
                        duration: '43:54',
                        number: 7,
                        viewed: 'Просмотрено'
                    },
                    s2e8: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s2e8.jpg?raw=true',
                        duration: '43:54',
                        number: 8,
                        viewed: 'Просмотрено'
                    }
                },
                s3: {
                    s3e1: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e1.jpg?raw=true',
                        duration: '43:54',
                        number: 1,
                        viewed: 'Просмотрено'
                    },
                    s3e2: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e2.jpg?raw=true',
                        duration: '43:54',
                        number: 2,
                        viewed: 'Просмотрено'
                    },
                    s3e3: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e3.jpg?raw=true',
                        duration: '43:54',
                        number: 3,
                        viewed: 'Просмотрено'
                    },
                    s3e4: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e4.jpg?raw=true',
                        duration: '43:54',
                        number: 4,
                        viewed: 'Просмотрено'
                    },
                    s3e5: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e5.jpg?raw=true',
                        duration: '43:54',
                        number: 5,
                        viewed: 'Просмотрено'
                    },
                    s3e6: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e6.jpg?raw=true',
                        duration: '43:54',
                        number: 6,
                        viewed: 'Просмотрено'
                    },
                    s3e7: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e7.jpg?raw=true',
                        duration: '43:54',
                        number: 7,
                        viewed: 'Просмотрено'
                    },
                    s3e8: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s3e8.jpg?raw=true',
                        duration: '43:54',
                        number: 8,
                        viewed: 'Просмотрено'
                    }
                },
                s4: {
                    s4e1: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e1.jpg?raw=true',
                        duration: '43:54',
                        number: 1,
                        viewed: 'Просмотрено'
                    },
                    s4e2: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e2.jpg?raw=true',
                        duration: '43:54',
                        number: 2,
                        viewed: 'Просмотрено'
                    },
                    s4e3: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e3.jpg?raw=true',
                        duration: '43:54',
                        number: 3,
                        viewed: 'Просмотрено'
                    },
                    s4e4: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e4.jpg?raw=true',
                        duration: '43:54',
                        number: 4,
                        viewed: 'Просмотрено'
                    },
                    s4e5: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e5.jpg?raw=true',
                        duration: '43:54',
                        number: 5,
                        viewed: 'Просмотрено'
                    },
                    s4e6: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e6.jpg?raw=true',
                        duration: '43:54',
                        number: 6,
                        viewed: 'Просмотрено'
                    },
                    s4e7: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e7.jpg?raw=true',
                        duration: '43:54',
                        number: 7,
                        viewed: 'Просмотрено'
                    },
                    s4e8: {
                        imgSE: 'https://github.com/semischastnov/s1e1-s4e8/blob/main/s4e8.jpg?raw=true',
                        duration: '43:54',
                        number: 8,
                        viewed: 'Просмотрено'
                    }
                }
            }
        }
        // {
        //     id: 2,
        //     name: 'Дом у дороги',
        //     rating: '8.0',
        //     year: 2024,
        //     genre:'Боевик',
        //     country: 'США',
        //     ageLimit: '18+',
        //     season: '1 сезон',
        //     duration:'1 час 37 минут',
        //     description: 'Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.',
        //     img: {
        //         large: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F66044bbb16b6563e4de84816.jpg&w=1380&q=80',
        //         small: "https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F65e8119346cee3bdb4cc3ca3.jpg&w=140&q=75",
        //         logoName: 'https://tvoe.live/_next/image?url=https%3A%2F%2Fcdn.tvoe.live%2Fimages%2F660d86c716b6563e4df0f9b9.png&w=530&q=80'
        //     },
        //     seasons: {
        //         trailer: '',
        //         s1: {
        //             s1e1:{
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e2: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e3: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e4: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e5: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e6: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e7: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s1e8: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             }
        //         },
        //         s2: {
        //             s2e1: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e2: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e3: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e4: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e5: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e6: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e7: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s2e8: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             }
        //         },
        //         s3: {
        //             s3e1: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e2: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e3: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e4: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e5: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e6: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e7: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s3e8: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             }
        //         },
        //         s4: {
        //             s4e1: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e2: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e3: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e4: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e5: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e6: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e7: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             },
        //             s4e8: {
        //                 imgSE: '',
        //                 duration: '43:54',
        //                 viewed: 'Просмотрено'
        //             }
        //         }
        //     }
        // }
    ]
};

const movieCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case INICIALIZED_MOVIE_CARD:
            return {
                ...state
            }
        case GET_MOVIE_CARD_BY_ID:
            return {
                ...state,
                selectedMovieCard: state.sliderMovieCard.find(card => card.id === action.id)
            };
        default:
            return state;
    }
}
export const initializedMovieCardAC = () => ({type: INICIALIZED_MOVIE_CARD});
export const getMovieCardByIdAC = (id) => ({type: GET_MOVIE_CARD_BY_ID, id});

export const initializedMovieCard = () => {
    return (dispatch) => {
        dispatch(initializedMovieCardAC());
    };
}
export const getMovieCardById = (id) => {
    return (dispatch) => {
        dispatch(getMovieCardByIdAC(id));
    };
}
export default movieCardReducer;