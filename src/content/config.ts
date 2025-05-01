import { z, defineCollection } from "astro:content"

const sourcesCollection = defineCollection({
    schema: 
        z.object({
            name: z.string(),
        }),
})

const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            source: z.string(),
            categories: z.array(z.string()),
            date: z.string(),
            image: image(),
            title: z.string(),
            infos: z.string(),
            rang: z.number()
        }),
})
// ["Frameworks", "Apprentissage", "Stratégie", "Vente", "Action", "Emploi", "Analyse", "Astro", "Projets"]

const sourcesCategory = defineCollection({
    schema:
        z.object({
            name: z.string(),
        }),
})

export const collections = {
    sources: sourcesCollection,
    posts: postsCollection,
    categorie: sourcesCategory
}