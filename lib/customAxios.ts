import axios, { AxiosInstance } from 'axios';

const customAxios: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export { customAxios };
