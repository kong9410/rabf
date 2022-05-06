import styledComponents, { css } from "styled-components";

const StyledForm = styledComponents.form`
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 0.25rem;
    margin: 0 auto;
    ${({ half }) =>
        half &&
        css`
            width: 50%;
        `}
`;

const StyledDiv = styledComponents.div`
    ${({ componentsCenter }) =>
        componentsCenter &&
        css`
            margin: 0 auto;
        `}
`;

const Form = ({ children, name, componentsCenter, half }) => {
    return (
        <StyledForm name={name} half={half}>
            <StyledDiv componentsCenter={componentsCenter}>
                {children}
            </StyledDiv>
        </StyledForm>
    );
};

export default Form;
