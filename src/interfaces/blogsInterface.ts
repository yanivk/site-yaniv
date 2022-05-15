import CategoriesInterface from './categoriesInterface'

export default interface BlogsInterface {
    id: number
    name: string
    content: string
    slug: string
    image?: string
    categories?: CategoriesInterface[]
}
