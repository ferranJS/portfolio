import { z, defineCollection } from "astro:content"

// 2. Define a `type` and `schema` for each collection
const blogpostCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: z.string(),
    month: z.enum([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
    year: z.number(),
    readTimeMinutes: z.number(),
    hidden: z.boolean().optional(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blogpost: blogpostCollection,
}
