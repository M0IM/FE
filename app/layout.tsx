import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MSWProvider } from './components/msw-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'moim',
	description: '모임 관리가 쉬워진다.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<MSWProvider />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
