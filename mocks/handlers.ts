import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/posts', () => {
		return HttpResponse.json([
			{
				title: 'hi',
				content: '바보',
			},
			{
				title: '다인',
				content: 'dain',
			},
		]);
	}),
];
