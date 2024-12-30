import ProjectCard from "@/app/components/project/project-card";
import { projects } from "@/app/lib/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project",
};

export default function Project() {
    return (
        <div className="flex flex-col gap-8 pt-32">
            <h1 className="font-bold text-4xl">Project</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard{...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
