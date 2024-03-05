'use client';

import { sendCookieConsentOnce, setCookieConsent } from '@/lib/session';
import Modal from '@/components/dialog/Modal';
import { ElementRef, useEffect, useRef } from 'react';
import CookieConsentContent from '@/components/server/CookieConsentContent';

const CookieConsent = () => {
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	return (
		<Modal ref={dialogRef} content={<CookieConsentContent />}>
			<footer className="flex flex-row w-full justify-evenly">
				<button
					className="bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg outline-none focus:ring-1 focus:ring-current"
					autoFocus={true}
					onClick={async () => {
						dialogRef?.current?.close();
						await setCookieConsent();
						await sendCookieConsentOnce();
					}}
				>
					Okay
				</button>
				<button
					className="bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg outline-none focus:ring-1 focus:ring-current"
					onClick={async () => {
						dialogRef?.current?.close();
						await sendCookieConsentOnce();
					}}
				>
					Decline
				</button>
			</footer>
		</Modal>
	);
};

export default CookieConsent;
