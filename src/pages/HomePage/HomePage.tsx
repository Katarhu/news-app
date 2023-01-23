import {Box, Container, Divider, Grid, Typography} from "@mui/material";

import ArticleSkeleton from "./components/ArticleSkeleton";
import Header from "./components/Header";
import Article from "./components/Article";
import {useAppSelector} from "../../hooks/redux";
import {selectArticles, selectIsArticlesLoading} from "../../store/articles/articles.selector";
import {IArticle} from "../../models/article";


function HomePage() {

    const isArticlesLoading = useAppSelector(selectIsArticlesLoading);
    const articles = useAppSelector(selectArticles);

    const getLoadingSkeletons = (isLoading: boolean) => {
        if( !isLoading ) return;
        return new Array(6).fill("").map(() =>
            <ArticleSkeleton />
        )
    }

    const getArticleItems = (articles: IArticle[]) => {
        if( isArticlesLoading ) return;
        if( !articles.length ) return <Typography fontSize={20} sx={{ p: 4 }}>There is no articles yet</Typography>

        return articles.map((article) =>
            // <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                <Article {...article} />
            // </Grid>
        )
    }

    const skeletonsWhileLoading = getLoadingSkeletons(isArticlesLoading);
    const articleItems = getArticleItems(articles);
    const articlesLength = articles.length;

    return (
        <Container
            maxWidth="xl"
            sx={{ minHeight: "100%", py: 4, display: "flex", flexDirection: "column", gap: 4 }}
        >
            <Header />

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
        </Container>
    );
}

export default HomePage;
