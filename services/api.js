import { getApiClient } from './axios';

//the client function must be called without the first argument to make sure it is client side.
export const api = getApiClient(); 