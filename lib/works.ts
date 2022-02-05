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

export async function fetchWorksData(): Promise<Work[]> {
    const response = await fetch('https://quasi-art.ru/elenapisarenko/api/works.json');

    const works = await response.json()

    return works
}

export async function fetchCategoriesData(): Promise<Category[]> {
    const response = await fetch('https://quasi-art.ru/elenapisarenko/api/categories.json');

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
