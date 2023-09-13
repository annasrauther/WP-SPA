export const API_BASE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/`;

export const POSTS_ENDPOINT = API_BASE + "posts";
export const PAGE_ENDPOINT = API_BASE + "pages";
export const JWT_TOKEN = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
export const JWT_VALIDATE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token/validate`;
