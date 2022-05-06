import styledComponents, { css } from "styled-components";

const StyledInput = styledComponents.input`
    min-width: 100px;
    width: 98.5%;
    height: 2em;
    margin-bottom: 0.5rem;
    ${({ block }) =>
        block &&
        css`
            display: block;
        `}
`;

const Input = ({ id, value, type, onChange, block }) => {
    return (
        <StyledInput
            id={id}
            value={value}
            type={type}
            onChange={onChange}
            block={block}
        />
    );
};

export default Input;
