import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema/mainSchema";

export const sanityConfig = defineConfig({
    name: "E-Commerce-Website",
    title: "e-commerce-website",
    projectId: "cvfcy9g3",
    plugins: [structureTool(), visionTool()],
    dataset: "production",
    basePath: "/sanityStudio",
    schema: {
        types: schemaTypes,
    }
});
