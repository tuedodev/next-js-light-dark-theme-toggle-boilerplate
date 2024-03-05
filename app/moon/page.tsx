import Image from 'next/image';

const MoonPage = () => {
	return (
		<article>
			<header className="grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(300px,_1fr)] gap-4 my-4">
				<div className="relative lg:aspect-[3/2]">
					<Image
						fill
						src="/malith-d-karunarathne-qIRJeKdieKA-unsplash.jpg"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
						alt="Article Image"
						priority={true}
						style={{
							objectFit: 'contain',
							top: '50%',
							transform: 'translateY(-50%)',
						}}
					/>
				</div>
				<h2 className="text-2xl flex justify-center items-center font-bold text-center">
					The Moon: A Celestial Partner in Health and Evolution
				</h2>
			</header>
			<section className="space-y-4">
				<h3 className="text-xl font-bold pl-4 mb-2">The Moon&apos;s Influence on Health</h3>
				<p>
					The Moon, our celestial neighbor, has been a constant companion to Earth. Its presence in our skies has
					captivated our imaginations and influenced not just our cultures, but also our health and well-being. One of
					the most famous effects of the Moon is on the tides of the oceans, but its influence goes beyond that. The
					term lunacy, derived from the Latin word for moon (luna), is often associated with mental disorders.
				</p>

				<h3 className="text-xl font-bold pl-4 mb-2">The Moon&apos;s Impact on Evolution</h3>
				<p>
					The Moon&apos;s gravitational pull on Earth also has a significant impact on life on our planet. Some believe
					that without the Moon, life as we know it would not have evolved. The Moon helps stabilize Earth&apos;s tilt
					and keeps its axial wobble in check. This stable environment is crucial for the development and sustenance of
					life.
				</p>

				<p>
					Additionally, the regular cycles of the Moon have influenced the behavior of many species. From mating rituals
					to migration patterns, the lunar phases have had a profound effect on the evolution of life on Earth.
				</p>

				<h3 className="text-xl font-bold pl-4 mb-2">Lunatic Influence on General Well-being</h3>
				<p>
					The Moon&apos;s influence on Earth extends to our general well-being. Some cultures believe that the
					Moon&apos;s phases can affect our moods and behaviors. The term &quot;lunatic&quot; is derived from the belief
					that certain mental disorders worsen during the full moon. While scientific evidence on this matter is mixed,
					there is no denying the cultural and historical significance of the Moon`&apos;s phases on our perceptions and
					emotions.
				</p>

				<p>
					In conclusion, the Moon&apos;s presence in our skies has been more than just a beautiful spectacle. It has
					shaped our health, influenced our evolution, and affected our daily lives in profound ways. As we continue to
					study and understand the moon&apos;s influence, we gain a deeper appreciation for our celestial neighbor.
				</p>
			</section>
		</article>
	);
};

export default MoonPage;
