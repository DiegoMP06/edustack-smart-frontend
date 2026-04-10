import { z } from "astro/zod";

export const PaginationSchema = z.object({
    links: z.object({
        first: z.string(),
        last: z.string(),
        prev: z.string().nullable(),
        next: z.string().nullable(),
    }),
    meta: z.object({
        current_page: z.number(),
        from: z.number().nullable(),
        last_page: z.number(),
        links: z.array(
            z.object({
                url: z.string().nullable(),
                label: z.string(),
                active: z.boolean(),
            }),
        ),
        path: z.string(),
        per_page: z.number(),
        to: z.number().nullable(),
        total: z.number(),
    }),
});

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    father_last_name: z.string(),
    mother_last_name: z.string(),
    email: z.string(),
    email_verified_at: z.string().nullable(),
    avatar_url: z.string().nullable(),
    phone: z.string().nullable(),
    bio: z.string().nullable(),
    is_active: z.boolean(),
    two_factor_confirmed_at: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
});

export const collaboratorSchema = UserSchema.extend({
    pivot: z.object({
        id: z.number(),
        role: z.string(),
    }),
});
