/**
 * The base URL for the WordPress REST API.
 * @type {string}
 */
export const API_BASE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/`;

/**
 * The URL for the posts endpoint.
 * @type {string}
 */
export const POSTS_ENDPOINT: string = API_BASE + "posts";

/**
 * The URL for the pages endpoint.
 * @type {string}
 */
export const PAGE_ENDPOINT: string = API_BASE + "pages";

/**
 * The URL for the JWT token endpoint.
 * @type {string}
 */
export const JWT_TOKEN = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;

/**
 * The URL for the JWT validate endpoint.
 * @type {string}
 */
export const JWT_VALIDATE = `${process.env.REACT_APP_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token/validate`;
