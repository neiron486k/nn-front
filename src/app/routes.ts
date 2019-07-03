import Landing from "../pages/landing/Landing";
import Article from "../pages/article/Article";

export default [
    {
        path: "/",
        component: Landing,
        exact: true,
        private: false
    },
    {
        path: "/articles/:slug",
        component: Article,
        exact: true,
        private: false
    }
];