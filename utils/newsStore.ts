export type Article = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

let articles: Article[] = [];

export const setArticles = (data: Article[]) => {
    articles = data;
};

export const getArticle = (slug: string) => articles[parseInt(slug)];
