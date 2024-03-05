import BaseLayout from '@/components/layout/BaseLayout';
import ThemeProvider from '@/components/layout/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';
import { getCookieConsent, getSessionToken } from '@/lib/session';
import CookieConsent from '@/components/dialog/CookieConsent';
import { FALLBACK_THEME } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Next JS Theme Toggle Boilerplate',
	description: 'Next JS Theme Toggle Boilerplate width GDPR Cookie Consent and Privacy Policy',
};

export default async function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	let sessiontoken = await getSessionToken();
	const cookieConsentDialogSent = sessiontoken?.cookieConsentDialogSent;
	const cookieConsent = await getCookieConsent();

	const initialTheme = sessiontoken?.theme ? sessiontoken.theme : FALLBACK_THEME;

	return (
		<html lang="en" data-theme={initialTheme}>
			<body className="font-mono">
				<ThemeProvider initialTheme={initialTheme}>
					<BaseLayout>
						{children}
						{modal}
						<div id="modal-root" />
						{cookieConsent || cookieConsentDialogSent ? null : <CookieConsent />}
					</BaseLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
