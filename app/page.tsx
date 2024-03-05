import Image from 'next/image';

export default async function Home() {
	return (
		<article className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4">
			<header className="grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(300px,_1fr)] gap-4 my-4">
				<div className="relative lg:aspect-[3/2]">
					<Image
						fill
						src="/dawid-zawila--G3rw6Y02D0-unsplash.jpg"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
						alt="Article Image"
						priority={true}
						style={{ objectFit: 'contain', top: '50%', transform: 'translateY(-50%)' }}
					/>
				</div>
				<h2 className="text-2xl flex justify-center items-center font-bold text-center">
					The Significance of Sunshine and Daily Outdoor Walking for a Positive Spirit
				</h2>
			</header>

			<section className="space-y-4">
				<p className="first-letter:text-4xl">
					Embracing the sun&apos;s rays and engaging in daily outdoor walks can profoundly impact one&apos;s emotional
					state and overall well-being. Studies have shown that regular exposure to sunlight and outdoor activities like
					walking can lead to a significant improvement in mental performance and emotional health.
				</p>

				<h3 className="text-xl font-bold pl-4">Benefits of Walking in the Sunlight</h3>
				<p>
					Walking under the sun offers a myriad of benefits beyond just physical exercise. Here are some compelling
					reasons why integrating this simple activity into your daily routine can be advantageous:
				</p>

				<h3 className="text-xl font-bold pl-4">Evidence Supporting Cognitive Enhancement</h3>
				<p>
					Research indicates that sunlight exposure can significantly enhance cognitive function, particularly in women.
					Improved attention, memory, and overall cognitive performance have been observed with increased exposure to
					sunlight. Additionally, sunlight exposure has been associated with better sleep quality, lower blood pressure,
					and improved cardiovascular health.
				</p>

				<h3 className="text-xl font-bold pl-4">Effects on Mood and Emotional Health</h3>
				<p>
					It&apos;s not just cognitive function that benefits from sunlight and outdoor walking. There&apos;s a wealth
					of evidence that these activities can significantly improve mood and emotional well-being. Research has shown
					that natural light can help regulate the body&apos;s internal clock and improve sleep, which in turn can have
					a positive impact on mood.
				</p>

				<p>
					Moreover, simply spending time outdoors in nature has been linked to lower levels of stress, anxiety, and
					depression. The combination of fresh air, natural light, and physical activity can provide a much-needed
					mental and emotional boost for many people.
				</p>

				<p>
					In summary, incorporating daily outdoor activities like walking in the sunshine can have a profound impact on
					mental well-being and cognitive abilities. By harnessing the benefits of sunlight, individuals can not only
					uplift their mood but also experience enhanced mental clarity and vitality.
				</p>
			</section>
		</article>
	);
}
