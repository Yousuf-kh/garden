import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Hero = () => {
	return (
		<div className='w-full h-screen relative'>
			<div className='absolute w-1/2 h-screen right-0 top-0 bottom-0'>
				<Image src={'/hero.svg'} fill alt='hero' className='object-cover' />
			</div>
			<div className='h-full w-full flex items-center container max-w-7xl mx-auto'>
				<div className='grid grid-cols-2 gap-4 items-end'>
					<div className='flex flex-col space-y-2 '>
						<h2 className='font-bricolageGrotesque text-6xl'>
							Make your space
						</h2>
						<div className='text-7xl font-bold max-w-fit text-green-700 flex gap-4'>
							<div className='relative'>
								<span className='relative z-20'>Greener</span>
								<div className='absolute -bottom-1 left-0 right-0 h-6 bg-[#FFC973] z-10' />
							</div>
							<span>🌱</span>
						</div>
						<h2 className='font-bricolageGrotesque text-6xl'>
							With <span className='text-[#A85013]'>Plants</span>
						</h2>
						<p className='pt-4'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quasi
							optio atque ducimus, eaque iure qui neque
						</p>
						<div className='flex items-center gap-4 pt-10'>
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

					<div className='z-40 pb-4'>
						<div className='p-4 bg-secondary rounded-xl flex items-center'>
							<div className='flex flex-col space-y-1 flex-1'>
								<div className='font-bold text-xl font-bricolageGrotesque'>
									Section 1
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Minima, illo.
								</p>
							</div>
							<Image src={'/hero/1.svg'} alt='1' width={100} height={100} />
						</div>
						<div className='grid grid-cols-2 gap-4 w-full mt-4'>
							<div className='p-4 bg-secondary rounded-xl flex items-center'>
								<div className='flex flex-col space-y-1 flex-1'>
									<div className='font-bold text-xl font-bricolageGrotesque'>
										Section 1
									</div>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<Image src={'/hero/2.svg'} alt='1' width={100} height={100} />
							</div>
							<div className='p-4 bg-secondary rounded-xl flex items-center'>
								<div className='flex flex-col space-y-1 flex-1'>
									<div className='font-bold text-xl font-bricolageGrotesque'>
										Section 1
									</div>
									<p>Lorem ipsum dolor sit amet</p>
								</div>
								<Image src={'/hero/3.svg'} alt='1' width={100} height={100} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
