import { Button, Input } from "@mui/material";

const ProductSearchBar = () => {
    const search = (name) => {
        console.log(name);
    }

    let searchValue = "";

    return (
        <Input placeholder="search"
            fullWidth
            value = {searchValue}
            endAdornment={
                <Button variant="contained" onClick={() => search(searchValue)}>조회</Button>
            }
        />
    );
};

export default ProductSearchBar;