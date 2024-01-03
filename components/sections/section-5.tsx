import Image from 'next/image';
import { Button } from '../ui/button';

const Section5 = () => {
	return (
		<div className=" w-full h-[45vh] bg-[url('/section-5/1.png')] container">
			<div className=' h-[45vh] flex justify-between items-center w-100% h-100%'>
				<h1 className=' uppercase text-5xl w-1/3  text-neutral-50'>
					start gardening and grow your Own plant!
				</h1>
				<Image
					src={'/section-5/2.png'}
					alt={'2'}
					width={276}
					height={221}
				/>

				<div className=' w-1/3'>
					<p className=' text-2xl text-neutral-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
					</p>
					<Button
						className='h-12 rounded-full flex items-center gap-1 group px-6 my-4'
						variant={'outline'}
					>
						<span>Read More</span>
						<div className='group-hover:translate-x-2 transition w-4 h-[1px] bg-black' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Section5;
