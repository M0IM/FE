'use client';

import { useEffect } from 'react';

export const MSWProvider = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (process.env.NEXT_REPUBLIC_API_MOCKING === 'enabled') {
				require('@/mocks/browser');
			}
		}
	}, []);
	return null;
};
