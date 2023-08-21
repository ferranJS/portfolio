import { z, defineCollection } from "astro:content"

// 2. Define a `type` and `schema` for each collection
const blogpostCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blogpost: blogpostCollection,
}
