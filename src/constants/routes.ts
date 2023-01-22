

export const ROUTES = {
    HOME: "/articles",
    ARTICLE: (id?: string) => id ? `/articles/${id}` : "/articles/:id",
    NON_MATCHING: "/*"
} as const;

export default ROUTES;
