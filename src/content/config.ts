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
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
        }),
})

export const collections = {
    sources: sourcesCollection,
    posts: postsCollection,
}