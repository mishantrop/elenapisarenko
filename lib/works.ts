export type Category = {
    id: number;
    title: string;
}

export type Work = {
    id: number;
    title: string;
    categoryId: number;
    src: string;
    thumb: string;
}

export async function fetchWorksData(): Promise<Work[]> {
    const response = await fetch('https://epcms.quasi-art.ru/api/works')

    const works = await response.json()

    return works
}

export async function fetchCategoriesData(): Promise<Category[]> {
    const response = await fetch('https://epcms.quasi-art.ru/api/categories')

    const categories = await response.json()

    return categories
}

export async function fetchWorkData(id: number): Promise<Work> {
    const works = await fetchWorksData()
    const initialWork = works.find((work) => work.id === Number(id))

    return {
        ...initialWork,
    }
}
