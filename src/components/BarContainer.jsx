import Bar from "./Bar";

const pageList = [
    {
        menuName: "product",
        path: "/product",
    },
    {
        menuName: "signin",
        path: "/signin",
    },
];

const BarContainer = () => {
    return <Bar pageList={pageList} />;
};

export default BarContainer;
