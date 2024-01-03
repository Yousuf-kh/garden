import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
	return (
		<div className='w-full h-[90vh] relative container'>
			<div className='absolute top-0 right-[45%]'>
				<Image
					src={'/about/2.png'}
					alt='hero'
					width={400}
					height={400}
					className='object-cover'
				/>
			</div>
			<div className='h-full w-full flex items-end justify-between'>
				<div className='w-1/2  '>
					<Image
						src={'/about/1.svg'}
						alt={'1'}
						width={420}
						height={100}
						className='mx-auto z-10'
					/>
				</div>
				<div className='w-1/2 pb-32'>
					<h1 className=' capitalize text-6xl font-semibold'>
						What’s best from our{' '}
						<span className='text-[#3A632F]'>plants</span>
					</h1>
					<p className=' text-slate-950 text-xl py-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam nec eros ut nunc luctus consectetur vel ac justo.
						Donec vulputate orci ut mi sodales finibus. Aliquam
						placerat ligula eget orci porttitor tincidunt. Sed a
						ligula id orci ultricies posuere nec sit amet erat.
					</p>
					<div className='flex items-center gap-10'>
						<Button className='h-12 rounded-full flex items-center gap-1 group px-6'>
							<span>Shop plant</span>
							<ArrowRight
								className='group-hover:translate-x-2 transition'
								size={18}
							/>
						</Button>
						<Button
							className='h-12 rounded-full flex items-center gap-1 group px-6'
							variant={'outline'}
						>
							<span>About Us</span>
							<div className='group-hover:translate-x-2 transition w-4 h-[1px] bg-black' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
