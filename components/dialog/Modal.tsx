'use client';

import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
	children: React.ReactNode;
	content?: React.ReactNode;
	onClose?: () => void;
	className?: string;
};
const Modal = forwardRef<HTMLDialogElement, Props>(({ children, content, onClose, className = '' }, ref) => {
	return (
		<div className={twJoin('@container', className)}>
			<dialog
				ref={ref}
				className="fixed bg-slate-500 dark:bg-gray-700 inset-0 @sm:inset-2 @md:inset-[10%] @xl:inset-[20%] @5xl:max-w-[800px] font-sans p-4 space-y-3 text-white rounded-lg outline-none focus:ring-1 focus:ring-current"
				onClose={() => {
					if (onClose) {
						console.log('On Close!!!');
						onClose();
					}
				}}
			>
				{content}
				{children}
			</dialog>
		</div>
	);
});

Modal.displayName = 'Modal';

export default Modal;
