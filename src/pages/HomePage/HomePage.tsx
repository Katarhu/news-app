import {Box, Container, Typography} from "@mui/material";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";


function HomePage() {
    return (
        <Container
            maxWidth="xl"
            sx={{ minHeight: "100%", py: 4 }}
        >
            <Header />
        </Container>
    );
}

export default HomePage;
