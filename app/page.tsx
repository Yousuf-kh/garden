import Navbar from '@/components/navbar';
import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import PlantCollections from '@/components/sections/plant-collections';
import Section5 from '@/components/sections/section-5';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<PlantCollections />
			<About />
			<Section5 />
		</div>
	);
}
