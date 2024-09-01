import ProjectCard from "@/app/components/project/project-card";
import { projects } from "@/app/lib/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project",
};

export default function Project() {
    return (
        <div className="flex flex-col space-y-10 px-8 pt-32">
            <h1 className="font-bold text-4xl">Project</h1>
            <div className="md:grid xl:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            href={project.href}
                            tag={project.tag}
                            year={project.year}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
