import { QueryProvider } from '../components/query-provider';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<QueryProvider>
				{/* Navbar */}
				<main className="pt-40 pb-20">{children}</main>
				{/* Footer */}
			</QueryProvider>
		</div>
	);
};

export default MarketingLayout;
