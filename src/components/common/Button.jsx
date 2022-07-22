import styledComponents, { css } from "styled-components";

const StyledButton = styledComponents.button`
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightway;
    cursor: pointer;
    ${({ display }) => {
        display &&
            css`
                display: ${display};
            `;
    }}
    ${({ primary }) =>
        primary &&
        css`
            color: white;
            background: navy;
            border-color: navy;
        `}
`;

const Button = ({ children, onClick, primary, display }) => {
    return (
        <StyledButton
            primary={primary}
            onClick={onClick}
            display={display}
            type="button"
        >
            {children}
        </StyledButton>
    );
};

export default Button;
