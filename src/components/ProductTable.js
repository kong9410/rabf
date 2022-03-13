import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const ProductTable = (props) => {
    const productList = props.productList;

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product No</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Discount Percentage</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((product) => (
                        <TableRow key={product.no} style={{ cursor: "pointer" }}>
                            <TableCell>{product.no}</TableCell>
                            <TableCell>{product.tags}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.discountPercentage}</TableCell>
                            <TableCell>{product.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;