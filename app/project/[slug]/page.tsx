
import { CustomMDX } from "@/app/components/blog/mdx";
import { getProject } from "@/app/lib/getMDX";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetails({params}: {params: {slug: string}}) {

    const project = getProject().find((project) => project.slug === params.slug);

    return (
        <div className="md:pt-28 pt-16">
            <section
                className={`px-4 md:pt-8 pt-8 backdrop-blur-2xl space-y-5 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-25 md:rounded-xl rounded-lg`}
            >

                <header className="flex flex-col gap-2 min-h-32 md:px-4">
                    <h1 className="font-bold text-4xl">{project?.posts.title}</h1>
                    <p className="text-xl">
                        {project?.posts.year}
                    </p>
                    <Link href={project?.posts.documentation} className="flex gap-2 text-2xl items-center hover:underline">
                        <FaGithub />
                    </Link>
                </header>

                <hr/>

                <article className="prose prose-quoteless prose-neutral dark:prose-invert mx-2 max-w-none flex flex-col px-2 text-black prose-headings:text-black100 dark:text-white prose-headings:dark:text-white pb-20 prose-p:leading-normal prose-li:leading-4">
                    <CustomMDX source={project?.content} />
                </article>
            </section>
        </div>
    );
}