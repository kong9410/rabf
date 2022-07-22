import Bar from "./Bar";

const BarContainer = () => {
    const pageList = [
        {
            menuName: "product",
            path: "/product",
        },
    ];

    let auth;
    if (localStorage.jwtToken) {
        auth = {
            menuName: "signin",
            path: "/signin",
        };
    } else {
        auth = {
            menuName: "logout",
            path: "/logout",
        };
    }

    return <Bar pageList={pageList} auth={auth} />;
};

export default BarContainer;
