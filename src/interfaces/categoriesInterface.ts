import BlogsInterface from './blogsInterface'

export default interface CategoriesInterface {
    id: number
    name: string
    description?: string
    blogs?: BlogsInterface[]
}
