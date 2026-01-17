import { projectsData } from "@/data/projects";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/project-details";

// Generate static params for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  setRequestLocale(locale);

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
