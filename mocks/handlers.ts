import { http, HttpResponse } from 'msw';

const User = [{ id: 'dydals3440', nickname: 'HIHIHI' }];

export const handlers = [
	http.post('/api/login', () => {
		return HttpResponse.json(User[1], {
			headers: {
				'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
			},
		});
	}),
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
