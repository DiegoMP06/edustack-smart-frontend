import { z } from "astro/zod";
import { PostSchema } from "@/schemas/blog";
import type {
    ImageDimensionsSchema,
    MediaSchema,
    ResponsiveImagesSchema,
} from "@/schemas/media";
import type { UserSchema } from "@/schemas";
import type { ProjectSchema } from "@/schemas/projects";

export type NavItem = {
    label: string;
    href: string;
};

export type BreadcrumbItem = {
    title: string;
    href: NonNullable<HTMLAnchorElement["href"]>;
};

export type User = z.infer<typeof UserSchema>;

export type ResponsiveImages = z.infer<typeof ResponsiveImagesSchema>;

export type ImageDimensions = z.infer<typeof ImageDimensionsSchema>;

export type Media = z.infer<typeof MediaSchema>;

export type Post = z.infer<typeof PostSchema>;

export type Project = z.infer<typeof ProjectSchema>;
