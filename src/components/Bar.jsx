import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const StyledBarWrapper = styledComponents.div`
    display: block;
    background-color: rgb(129, 131, 235);
`;

const StyledBar = styledComponents.div`
    width: 1300px;
    min-width: 1300px;
    height: 2em;
    margin: 0 auto;
`;

const StyledButton = styledComponents.button`
    width: 6em;
    height: 100%;
    background: none;
    border: 0;
    margin-right: 2px;
    color: white;
    cursor: pointer;
`;

const Bar = ({ pageList, auth }) => {
    return (
        <StyledBarWrapper>
            <StyledBar>
                {pageList.map((page, index) => (
                    <Link
                        exact="true"
                        to={page.path}
                        key={index}
                        style={{ textDecoration: "none" }}
                    >
                        <StyledButton key={page.menuName}>
                            {page.menuName}
                        </StyledButton>
                    </Link>
                ))}
                <Link
                    exact="true"
                    to={auth.path}
                    style={{ textDecoration: "none" }}
                >
                    <StyledButton>{auth.menuName}</StyledButton>
                </Link>
            </StyledBar>
        </StyledBarWrapper>
    );
};

export default Bar;
