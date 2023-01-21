import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import Header from "./components/Header";
import ArticleSkeleton from "./components/ArticleSkeleton";


function HomePage() {
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
                    Results: 6
                </Typography>

                <Divider />

                <Grid container spacing={{ xs: 3, md: 4, lg: 5}} sx={{ py: 4, px: { xs: 1, md: 2} }}  >
                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>

                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>

                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>

                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>

                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>

                    <Grid item container xs={12} md={6} lg={4} justifyContent="center">
                        <ArticleSkeleton />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default HomePage;
