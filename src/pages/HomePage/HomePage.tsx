import {createRef, useEffect, useMemo, useState, useTransition} from "react";

import {Box, Container, Divider, Typography} from "@mui/material";

import Header from "./components/Header";
import ArticleSkeleton from "./components/ArticleSkeleton";
import Article from "./components/Article";
import IntersectionBox from "./components/IntersectorBox";
import ScrollBack from "./components/ScrollBack";

import setArticlesPriority from "./utils/setArticlesPriority";
import sortArticlesByPriority from "./utils/sortArticlesByPriority";

import {useAppSelector} from "../../hooks/redux";
import {
    selectArticleFilter,
    selectArticles, selectArticlesError,
    selectIsArticlesLoading
} from "../../store/articles/articles.selector";


import {environment} from "../../environment";

import {IArticle} from "../../models/article";


function HomePage() {

    const isArticlesLoading = useAppSelector(selectIsArticlesLoading);
    const articlesError = useAppSelector(selectArticlesError);
    // const filter = useAppSelector(selectArticleFilter);
    const articles = useAppSelector(selectArticles);

    const headerRef = createRef<HTMLElement>();

    const [filter, setFilter] = useState('');

    const [_, startTransition] = useTransition();

    const [filteredArticles, setFilteredArticles] = useState(articles);

    useEffect(() => {
        if( !filter ) {
            setFilteredArticles(articles);
            return;
        }

        setArticlesPriority(articles, filter)
            .then((prioritizedArticles) => sortArticlesByPriority(prioritizedArticles))
            .then((filteredAndSortedArticles) => {
                setFilteredArticles(filteredAndSortedArticles);
            });

    }, [filter, articles]);

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
            <Article key={article.id} {...article} currentFilter={filter} />
        )
    }

    const scrollIntoView = () => {
        headerRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const handleSearchQueryChange = (query: string) => {
        startTransition(() => {
            setFilter(query);
        });
    }

    const skeletonsWhileLoading = getLoadingSkeletons(isArticlesLoading);
    const articleItems = useMemo(() => getArticleItems(filteredArticles), [filteredArticles]);
    const articlesLength = filteredArticles.length;

    return (
        <Container
            maxWidth="xl"
            sx={{ minHeight: "100%", py: 4, display: "flex", flexDirection: "column", gap: 4 }}
        >
            <Header onSearch={handleSearchQueryChange} ref={headerRef} />

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
                    {articlesError}
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
