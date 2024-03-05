import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

type Props = {
	children: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="grid grid-cols-1 grid-rows-[auto_auto_1fr_auto] px-4 min-h-[100svh] xl:container">
			<Header />
			<Nav />
			<section>{children}</section>
			<Footer />
		</div>
	);
};

export default BaseLayout;
