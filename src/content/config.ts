import { z, defineCollection } from "astro:content"

const sourcesCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
})

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            source: z.string(),
            categories: z.array(z.string()),
            date: z
                .string(),
            image: image(),
            title: z.string(),
            infos: z.string()
        }),
})

const sourcesCategory = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
})

export const collections = {
    sources: sourcesCollection,
    posts: postsCollection,
    categorie: sourcesCategory
}