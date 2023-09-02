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

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      position: z.number(),
      title: z.string(),
      urls: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        }),
      ),
      imageUrl: image().optional(),
      imageName: z.string(),
      imageAlt: z.string(),
      techLogoNames: z.array(z.string()),
      smallDescription: z.object({
        en: z.string(),
        es: z.string(),
        ca: z.string(),
        ru: z.string().optional(),
      }),
      description: z.object({
        en: z.string(),
        es: z.string(),
        ca: z.string(),
        ru: z.string().optional(),
      }),
      hidden: z.boolean().optional(),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blogpost: blogpostCollection,
  project: projectCollection,
}
