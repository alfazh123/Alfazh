import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ahmd Mufahras Li Alfazh Assardew",
        short_name: "Ahmd Alfazh",
        description:
            "A Portfolio Website by Alfazh, show some of my Pprojects, Art, and Blog.",
        start_url: "/",
        display: "standalone",
        background_color: "#f7f7f7",
        theme_color: "#f7f7f7",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64",
                type: "image/png",
            },
        ],
    };
}
