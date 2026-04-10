import { z } from "astro/zod";
import { PuckContentSchema } from "./puck";
import { MediaSchema } from "./media";
import { collaboratorSchema, PaginationSchema, UserSchema } from ".";

export const ProjectStatusSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    color: z.string(),
    order: z.number(),
});

export const ProjectCategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable(),
    color: z.string(),
    order: z.number(),
});

export const ProjectSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    content: PuckContentSchema,
    repository_url: z.url(),
    demo_url: z.url(),
    tech_stack: z.array(z.string()),
    version: z.string(),
    license: z.string(),
    is_featured: z.boolean(),
    is_published: z.boolean(),
    published_at: z.string(),
    project_status_id: z.number(),
    user_id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    media: z.array(MediaSchema),
    categories: z.array(ProjectCategorySchema),
    status: ProjectStatusSchema,
    collaborators: z.array(collaboratorSchema),
    author: UserSchema,
});

export const ProjectsWithPagination = PaginationSchema.extend({
    data: z.array(ProjectSchema),
});
