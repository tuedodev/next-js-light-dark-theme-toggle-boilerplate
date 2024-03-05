import Image from 'next/image';
import PrivacyContent from '@/components/server/PrivacyContent';

const PrivacyPage = () => {
	return (
		<main className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4">
			<header className="grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(300px,_1fr)] gap-4 my-4">
				<div className="relative lg:aspect-[3/2]">
					<Image
						fill
						src="/hack-capital-uv5_bsypFUM-unsplash.jpg"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
						alt="Article Image"
						priority={true}
						style={{ objectFit: 'contain', top: '50%', transform: 'translateY(-50%)' }}
					/>
				</div>
				<h2 className="text-2xl flex justify-center items-center font-bold text-center">Our Privacy Policy</h2>
			</header>
			<PrivacyContent className="space-y-4" />
		</main>
	);
};

export default PrivacyPage;
