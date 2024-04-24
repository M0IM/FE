import { ModalProvider } from '../components/modal-provider';
import { QueryProvider } from '../components/query-provider';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<QueryProvider>
				<ModalProvider />
				{children}
			</QueryProvider>
		</div>
	);
};

export default PlatformLayout;
