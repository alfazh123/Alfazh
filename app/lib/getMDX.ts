import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function generateStaticParams({ search }: { search?: string }) {
    // const dir = "./app/posts";
    const dir = path.join(process.cwd(), "app/posts");

    const files = fs.readdirSync(dir);

    const contentFile = files.map((file) => {
        return fs.readFileSync(`${dir}/${file}`, "utf8");
    });

    const slug = files.map((file) => {
        const slug = file.replace(".mdx", "");
        return slug;
    });

    let frontMatter = contentFile.map((file) => {
        const data = matter(file);
        return data.data;
    });

    if (search) {
        const searchs = search.toLowerCase();
        frontMatter = frontMatter.filter((file) => {
            return (
                file.title.toLowerCase().includes(search) ||
                file.description.toLowerCase().includes(search) ||
                file.tags.join(" ").toLowerCase().includes(search)
            );
        });
    }

    return {
        props: {
            frontMatter,
            slug,
        },
    };
}

// export async function generateStaticParams({ search }: { search?: string }) {
//     // Get the path to your content directory
//     const contentDirectory = path.join(process.cwd(), "app/posts");

//     // Get the filenames of all files in the content directory
//     const filenames = fs.readdirSync(contentDirectory);

//     const frontMatter = filenames.map((filename) => {
//         // Read the file

//         // Parse front-matter
//         const { data } = matter(filename);

//         return {
//             data,
//         };
//     });

//     // Map the filenames to an array of static paths
//     const paths = filenames.map((filename) => ({
//         params: {
//             slug: filename.replace(/\.mdx$/, ""),
//             frontMatter,
//         },
//     }));

//     return { paths };
// }
