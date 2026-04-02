import { apiFetch } from "@/lib/api";

type BlogApiParams = {
    page: number;
    search: string;
    slug: string;
    clientIp: string;
    userAgent: string;
};

export default {
    async getPosts({ page, search }: Pick<BlogApiParams, "page" | "search">) {
        return apiFetch("/posts", {
            page,
            filter: {
                search,
            },
        });
    },
    async getPostBySlug({
        slug,
        clientIp,
        userAgent,
    }: Pick<BlogApiParams, "slug" | "clientIp" | "userAgent">) {
        return apiFetch(`/posts/${slug}`, undefined, {
            headers: {
                "X-Forwarded-For": clientIp,
                "User-Agent": userAgent,
            },
        });
    },
};
