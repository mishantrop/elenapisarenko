export type Category = {
    id: number;
    title: string;
}

export type Work = {
    id: number;
    title: string;
    categoryId: number;
    src: string;
}

export const getCategories = (): Array<Category> => {
    return [
        {
            id: 0,
            title: 'Картина маслом',
        },
        {
            id: 1,
            title: 'Картина салом',
        },
        {
            id: 2,
            title: 'Карандашём',
        },
        {
            id: 3,
            title: 'Гуаш',
        },
    ]
}

export const getWorks = (): Array<Work> => {
    return [
        {
            id: 0,
            title: 'hello',
            categoryId: 1,
            src: '000.jpg',
        },
        {
            id: 1,
            title: 'world',
            categoryId: 2,
            src: '001.jpg',
        },
        {
            id: 2,
            title: 'Название работы состоит из почти сотни символов для проверки адаптивности вёрстки',
            categoryId: 3,
            src: '002.jpg',
        },
        {
            id: 3,
            title: 'Названиеработыизодногословадляпроверкивёрстки',
            categoryId: 4,
            src: '003.jpg',
        },
        {
            id: 4,
            title: 'Привет',
            categoryId: 1,
            src: '004.jpg',
        },
        {
            id: 5,
            title: 'Как дела?',
            categoryId: 3,
            src: '005.jpg',
        },
        {
            id: 6,
            title: 'Эмоджи 🐺',
            categoryId: 2,
            src: '006.jpg',
        },
        {
            id: 7,
            title: '',
            categoryId: 4,
            src: '007.jpg',
        },
        {
            id: 8,
            title: '',
            categoryId: 1,
            src: '008.jpg',
        },
    ]
}
