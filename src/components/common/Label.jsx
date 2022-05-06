import styledComponents, { css } from "styled-components";

const StyledLabel = styledComponents.label`
    text-align: left;
    ${({ block }) =>
        block &&
        css`
            display: block;
        `}
`;

const Label = ({ children, htmlFor, block }) => {
    return (
        <StyledLabel htmlFor={htmlFor} block={block}>
            {children}
        </StyledLabel>
    );
};

export default Label;
