import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/lib", "/public"],
        },
        sitemap: "https://alfazh.vercel.app/sitemap.xml",
    };
}
