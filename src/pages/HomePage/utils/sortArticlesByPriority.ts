import {IArticle} from "../../../models/article";


export default async function sortArticlesByPriority(articles: IArticle[]) {
    const sortedArticles = articles
        .filter((article) => !!article.priority)
        .sort(( a, b) =>
            (b.priority ?? 0) - (a.priority ?? 0)
        );


    return sortedArticles.map((article) => {
        delete article.priority;
        return article;
    });
}
