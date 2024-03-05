import React from 'react';
import ToggleThemeButton from './ToggleThemeButton';
import { twJoin } from 'tailwind-merge';

type Props = {
	className?: string;
};
const Header: React.FC<Props> = ({ className }) => {
	return (
		<div className={twJoin(className, 'flex')}>
			<ToggleThemeButton className="flex-0 self-start" />
			<h1 className="flex-1 text-3xl font-bold underline decoration-3 text-center py-2">
				Next JS Toggle Light and Dark Mode
			</h1>
		</div>
	);
};

export default Header;
