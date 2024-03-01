import { Account, Detail, Home, Login, NewArticle, SearchBlog, Signup, UserArticles } from "pages";

export const SIGNUP_ROUTE = "/signup";
export const LOGIN_ROUTE = "/login";
export const HOME_ROUTE = "/home";
export const BLOG_ROUTE = "/blogs/";
export const SEARCH_ROUTE = "/search";
export const MY_ARTICLES_ROUTE = "/my-articles";
export const ACCOUNT_ROUTE = "/account";
export const CREATE_POST = "/create-post";

export const routes = [
  { path: '/', element: Home, protected: false },
  { path: SIGNUP_ROUTE, element: Signup, protected: false },
  { path: LOGIN_ROUTE, element: Login, protected: false },
  { path: HOME_ROUTE, element: Home, protected: false },
  { path: `${BLOG_ROUTE}:postId`, element: Detail, protected: false },
  { path: SEARCH_ROUTE, element: SearchBlog, protected: false },
  { path: ACCOUNT_ROUTE, element: Account, protected: true },
  { path: CREATE_POST, element: NewArticle, protected: true },
  { path: MY_ARTICLES_ROUTE, element: UserArticles, protected: true }
];
