'use client';

import Modal from '@/components/dialog/Modal';
import PrivacyContent from '@/components/server/PrivacyContent';
import React, { ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import CloseButton from '@/components/layout/CloseButton';

const PrivacyModalPage = () => {
	const dialogRef = useRef<ElementRef<'dialog'>>(null);
	const router = useRouter();

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);
	function onDismiss() {
		router.back();
	}

	return createPortal(
		<Modal ref={dialogRef} content={null} className="" onClose={onDismiss}>
			<header className="border-b border-slate-500 flex justify-between">
				<h2 className="text-xl font-bold pb-2">Our Privacy Policy</h2>
				<CloseButton onClick={onDismiss} className="text-white hover:text-blue-200 transition-all" autoFocus={true} />
			</header>
			<PrivacyContent />
		</Modal>,
		document.getElementById('modal-root')!
	);
};

export default PrivacyModalPage;
