import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

type Props = {
	className?: string;
};
const Nav: React.FC<Props> = ({ className }) => {
	return (
		<nav className={twJoin(className, 'flex flex-row flex-wrap w-full gap-x-8 gap-y-4')}>
			<Link className="px-4 py-2 bg-blue-300 hover:bg-blue-600 rounded-lg" href="/">
				Sunshine Home
			</Link>
			<Link className="px-4 py-2 bg-blue-300 hover:bg-blue-600 rounded-lg" href="/moon">
				Moon
			</Link>
			<Link className="px-4 py-2 bg-blue-300 hover:bg-blue-600 rounded-lg" href="/privacy">
				Privacy
			</Link>
		</nav>
	);
};

export default Nav;
