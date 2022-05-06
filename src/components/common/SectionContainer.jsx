import styledComponents from "styled-components";

const StyledSection = styledComponents.section`
    min-width: 1300px;
    width: 1300px;
    margin: 0 auto;
    padding-top: 0.5rem;
`;

const SectionContainer = ({ children }) => {
    return <StyledSection>{children}</StyledSection>;
};

export default SectionContainer;
