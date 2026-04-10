import { apiFetch } from "@/lib/api";

type ProjectsApiParams = {
    page: number,
    search: string;
    slug: string;
}

export default {
    async getProjects({ page, search }: Pick<ProjectsApiParams, "page" | "search">) {
        return apiFetch("/projects", {
            page,
            filter: {
                search,
            },
        });
    },
    async getProjectBySlug({ slug }: Pick<ProjectsApiParams, "slug">) {
        return apiFetch(`/projects/${slug}`);
    },
}