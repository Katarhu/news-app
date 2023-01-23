import {Box, Container, Divider, Grid, Typography} from "@mui/material";

import ArticleSkeleton from "./components/ArticleSkeleton";
import Header from "./components/Header";
import Article from "./components/Article";
import {useAppSelector} from "../../hooks/redux";
import {selectArticles, selectIsArticlesLoading} from "../../store/articles/articles.selector";
import {IArticle} from "../../models/article";
import IntersectionBox from "./components/IntersectorBox";
import {environment} from "../../environment";
import {createRef, useMemo} from "react";
import ScrollBack from "./components/ScrollBack";


function HomePage() {

    const isArticlesLoading = useAppSelector(selectIsArticlesLoading);
    const articles = useAppSelector(selectArticles);
    const headerRef = createRef<HTMLElement>();

    const getLoadingSkeletons = (isLoading: boolean) => {
        if( !isLoading ) return;
        return new Array(environment.ARTICLES_PER_FETCH).fill("").map((_, index) =>
            <ArticleSkeleton key={index} />
        )
    }

    const getArticleItems = (articles: IArticle[]) => {
        if( isArticlesLoading ) return;
        if( !articles.length ) return;

        return articles.map((article) =>
            <Article key={article.id + new Date().getTime() * Math.random() * 1000} {...article} />
        )
    }

    const scrollIntoView = () => {
        headerRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const skeletonsWhileLoading = getLoadingSkeletons(isArticlesLoading);
    const articleItems = useMemo(() => getArticleItems(articles), [articles]);
    const articlesLength = articles.length;

    return (
        <Container
            maxWidth="xl"
            sx={{ minHeight: "100%", py: 4, display: "flex", flexDirection: "column", gap: 4 }}
        >
            <Header ref={headerRef} />

            <Box
                component="main"
            >
                <Typography
                    color="primary"
                    sx={{ fontWeight: 600, mb: 1 }}
                >
                    Results: {articlesLength}
                </Typography>

                <Divider />


                <Box
                    sx={{
                        display: "grid",
                        placeItems: "center",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(auto-fit, minmax(400px, 1fr))"},
                        gap: 3,
                        padding: "2em 1em",
                    }}
                >
                    {articleItems}
                    {skeletonsWhileLoading}
                </Box>
            </Box>

            <ScrollBack onClick={scrollIntoView}/>

            <IntersectionBox />

        </Container>
    );
}

export default HomePage;
