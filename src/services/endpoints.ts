// API_BASE is the base URL for the WordPress REST API.
export const API_BASE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/`;

// POSTS_ENDPOINT is the URL for the posts endpoint.
export const POSTS_ENDPOINT = API_BASE + "posts";

// PAGE_ENDPOINT is the URL for the pages endpoint.
export const PAGE_ENDPOINT = API_BASE + "pages";

// JWT_TOKEN is the URL for the JWT token endpoint.
export const JWT_TOKEN = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;

// JWT_VALIDATE is the URL for the JWT validate endpoint.
export const JWT_VALIDATE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token/validate`;
