import {Box, Typography} from "@mui/material";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <Box
            id="anchor-header"
        >
            <Typography
                color="primary"
                sx={{ fontWeight: 600, mb: 1 }}
            >
                Filter by keywords
            </Typography>

            <SearchBar />
        </Box>
    );
}

export default Header;
