/**
 * Url api on STRAPI
 */
const BASE_ENDPOINT_STRAPI = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

//Strapi
export const GET_TASK = `${BASE_ENDPOINT_STRAPI}/tasks`;