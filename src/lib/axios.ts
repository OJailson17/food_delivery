import axios from 'axios';

export const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_AXIOS_BASE_URL_PROD}`,
});
