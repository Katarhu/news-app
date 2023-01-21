import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
    return (
        <Paper
            component="form"
            elevation={3}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 600 }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by keywords"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}

export default SearchBar;
