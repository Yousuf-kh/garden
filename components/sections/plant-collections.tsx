import Image from 'next/image'

const PlantCollections = () => {
	return (
		<div className='w-full min-h-[70vh]'>
			<div className='w-full min-h-[70vh] bg-gradient-to-l overflow-hidden from-[#3A632F] to-[#80CA6C] relative rounded-l-full'>
				<div className='absolute left-0 bottom-0 w-1/2 h-full'>
					<Image
						fill
						src={'/plant-transparent.svg'}
						alt='plant-transparent'
						className='object-cover'
					/>
				</div>
				<div className='flex justify-center flex-col items-center py-12 max-w-xl mx-auto'>
					<h1 className='text-5xl font-bricolageGrotesque uppercase text-white'>
						Best selling
					</h1>
					<div className='flex items-center gap-2 text-5xl text-white'>
						<h2 className='font-bricolageGrotesque mt-2'>Plant Collections</h2>
						<span>🌳</span>
					</div>

					<p className='text-center mt-2 opacity-85 text-white'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
						similique in illum dolore a numquam reiciendis repellat quam
						veritatis vel.
					</p>
				</div>

				<div className='grid grid-cols-4 gap-6 max-w-6xl mx-auto z-40 relative'>
					<div>
						<div className='bg-[#FFC973] rounded-t-full w-full pt-5'>
							<Image
								src={'/hero/1.svg'}
								alt='1'
								width={120}
								height={120}
								className='block mx-auto'
							/>
						</div>
						<div className='bg-secondary px-4 pb-12'>
							<h1 className='text-center text-xl font-bold font-bricolageGrotesque'>
								Plant 1
							</h1>
							<p className='opacity-85'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
								hic harum amet dolor illo aut ducimus dolores consectetur quis
								doloremque.
							</p>
						</div>
					</div>

					<div className='relative'>
						<div className='bg-[#80CA6C] rounded-t-full w-full pt-5'>
							<Image
								src={'/hero/2.svg'}
								alt='1'
								width={120}
								height={120}
								className='block mx-auto'
							/>
						</div>
						<div className='bg-secondary px-4 pb-12'>
							<h1 className='text-center text-xl font-bold font-bricolageGrotesque'>
								Plant 2
							</h1>
							<p className='opacity-85'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
								hic harum amet dolor illo aut ducimus dolores consectetur quis
								doloremque.
							</p>
						</div>
					</div>

					<div className='relative'>
						<div className='bg-[#FFC973] rounded-t-full w-full pt-5'>
							<Image
								src={'/hero/3.svg'}
								alt='1'
								width={120}
								height={120}
								className='block mx-auto'
							/>
						</div>
						<div className='bg-secondary px-4 pb-12'>
							<h1 className='text-center text-xl font-bold font-bricolageGrotesque'>
								Plant 3
							</h1>
							<p className='opacity-85'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
								hic harum amet dolor illo aut ducimus dolores consectetur quis
								doloremque.
							</p>
						</div>
					</div>

					<div className='relative'>
						<div className='bg-[#80CA6C] rounded-t-full w-full pt-5'>
							<Image
								src={'/hero/1.svg'}
								alt='1'
								width={120}
								height={120}
								className='block mx-auto'
							/>
						</div>
						<div className='bg-secondary px-4 pb-12'>
							<h1 className='text-center text-xl font-bold font-bricolageGrotesque'>
								Plant 4
							</h1>
							<p className='opacity-85'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
								hic harum amet dolor illo aut ducimus dolores consectetur quis
								doloremque.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlantCollections
