import Link from 'next/link';

const CookieConsentContent = () => {
	return (
		<>
			<header className="border-b border-slate-500">
				<h2 className="text-xl font-bold pb-2">Cookie Consent</h2>
			</header>
			<main className="text-base font-industrial">
				<p>We are using cookies to improve your experience with this website.</p>
				<p>
					You can get more information on how we use cookies in our{' '}
					<Link
						className="font-medium underline decoration-2 hover:decoration-blue-600 hover:text-blue-600 focus:ring-1 focus:ring-blue-300"
						href="/privacy"
					>
						Privacy Policy
					</Link>
					.
				</p>
				<p>Please accept in order to get the full functionality of this website.</p>
			</main>
		</>
	);
};

export default CookieConsentContent;
