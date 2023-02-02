import { z, defineCollection } from "astro:content";

// Define a collection of newletter posts
const newsletterCollection = defineCollection({
	schema: z.object({
		title: z.string().max(100),
		date: z.date(),
		categories: z.array(z.string()),
		summary: z.string(),
		image: z.string().optional(),
	}).passthrough(),
});

// Define more collections here...

// Export
export const collections = {
	//  collectionName: collection
	newsletter: newsletterCollection,
};
