import { Container } from "@mui/material";
import ProductSearchBar from "./ProductSearchBar";
import ProductTable from "./ProductTable";

const ProductPage = () => {
    const productList = [];

    return (
        <Container maxWidth="lg" height="100%" style={{padding:"1em"}}>
            <ProductSearchBar />
            <ProductTable productList={productList} />
        </Container>
    );
}

export default ProductPage;