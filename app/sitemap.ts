import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://alfazh.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://alfazh.vercel.app/about",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://alfazh.vercel.app/projects",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: "https://alfazh.vercel.app/blog",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
    ];
}
