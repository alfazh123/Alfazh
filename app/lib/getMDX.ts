import fs from "fs";
import path from "path";
import matter from "gray-matter";


function generateStaticParams({
    search,
    tag,
}: {
    search?: string;
    tag?: string[];
}) {
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

    let posts = contentFile.map((file, id) => {
        const {content, data} = matter(file);
        return {posts : data, slug: slug[id], content: content};
    });

    if(tag) {
        tag = Array.isArray(tag) ? tag : [tag];
        tag.forEach((t) => {
            posts = posts.filter((file) => {
                return (
                    file.posts.tags.join(' ').toLowerCase().includes(t)
                )
            })
        })
    }

    if (search) {
        const searchs = search.toLowerCase();

        // declare new posts / data with filter function
        posts = posts.filter((file) => {
            return (
                file.posts.title.toLowerCase().includes(searchs) ||
                file.posts.description.toLowerCase().includes(searchs) ||
                file.posts.tags.join(' ').toLowerCase().includes(searchs)
            );
        });
    }


    return posts;
}

function getTagsMDX() {
    const dir = path.join(process.cwd(), "app/posts");

    const files = fs.readdirSync(dir);

    // read each file using map and fs function
    const contentFile = files.map((file) => {
        return fs.readFileSync(`${dir}/${file}`, "utf8");
    });

    // load frontMatter
    let frontMatter = contentFile.map((file) => {
        const data = matter(file);
        return data.data;
    });

    // get tags from data colection
    const tags = frontMatter.map((file) => file.tags);

    const separateTags = tags.flat();

    function removeDuplicates(array: any[]) {
        return array.filter((a, b) => array.indexOf(a) === b);
    }

    const tagsArray = removeDuplicates(separateTags);

    return tagsArray;
}

function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function getHeadings (content: string) {
    const preCodeRegex = /```[\s\S]*?```/g;
    content = content.replace(preCodeRegex, '');

    const headingRegex = /(#+)\s(.+)/g;
    let match;
    const headings = [];

    while ((match = headingRegex.exec(content))) {
        const level = match[1].length;
        const text = match[2];
        const slug = slugify(text);
        headings.push({
            level,
            text,
            slug,
        });
    }

    return headings;
}

export {
    generateStaticParams, 
    getTagsMDX, 
    getHeadings
}

// get last update file
export function getUpdateDate({ slug }: { slug: string } ) {
    const dir = path.join(process.cwd(), "app/posts");

    const date = fs.statSync(path.join(dir, slug + ".mdx")).mtime;

    return date;
}