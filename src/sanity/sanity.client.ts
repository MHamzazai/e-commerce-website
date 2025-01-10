import { createClient, type ClientConfig } from "next-sanity";

const sanityClient:ClientConfig = {
    projectId: "cvfcy9g3",
    dataset: "production",
    apiVersion: "2025-01-05",
    useCdn: false,
};

export default createClient(sanityClient);