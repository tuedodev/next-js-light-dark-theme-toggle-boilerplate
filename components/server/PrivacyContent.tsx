import { twJoin } from 'tailwind-merge';

type Props = {
	className?: string;
};

const PrivacyContent: React.FC<Props> = ({ className }) => {
	return (
		<>
			<main className={twJoin('text-base', className)}>
				<p>
					Your privacy is important to us. This Privacy Policy outlines the types of personal information that is
					received and collected by our website and how it is used.
				</p>
				<p>
					We may collect personal information such as your name, email address, and demographic information when
					voluntarily submitted by our visitors. This information is used solely to fulfill your specific request,
					unless you give us permission to use it in another manner.
				</p>
				<p>
					We do not sell, trade, or rent your personal information to third parties. However, we may share generic
					aggregated demographic information not linked to any personal identification information regarding visitors
					and users with our business partners and trusted affiliates for the purposes outlined above.
				</p>
				<p>
					Our website uses cookies to improve user experience. By using our site, you consent to the use of cookies in
					accordance with our Privacy Policy. You can disable cookies in your browser settings if you prefer not to
					accept them.
				</p>
				<p>
					This Privacy Policy applies only to our online activities and is valid for visitors to our website with
					regards to the information that they share and/or collect. By using our website, you hereby consent to our
					Privacy Policy and agree to its terms.
				</p>
			</main>
		</>
	);
};

export default PrivacyContent;
