/**
 * This file features and exports all of your calls to the API
 * 
 * You need to replace YOUR_API_KEY in the string associated with KEY with your actual API key
 */
export const BASE_URL = 'https://api.harvardartmuseums.org';
export const KEY = 'apikey=4bdbc531-de80-46bc-a963-8a6a0a3fb6ac';

/**
 * This will make a call to the API for a single term and value (e.g. "person", and "unknown"), and return the result
 */
export async function getUsers(props) {
  try {
    const response = await fetch(`${ BASE_URL }/object?${ KEY }&${ term }=${ encodeURI(value.split('-').join('|')) }`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
