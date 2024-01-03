import { navbarLinks } from '@/app.constants'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageToggle } from './shared/language-toggle'
import { ModeToggle } from './shared/mode-toggle'

const Navbar = () => {
	return (
		<div className='container max-w-7xl mx-auto h-[10vh] backdrop-blur-lg bg-white/30 dark:bg-black/30 fixed top-0 left-0 right-0 z-50'>
			<div className='flex h-full w-full justify-between items-center'>
				<Link href={'/'}>
					<Image src={'/logo.svg'} alt='logo' width={120} height={50} />
				</Link>

				<div className='flex items-center gap-4'>
					{navbarLinks.map(item => (
						<div
							key={item.link}
							role='button'
							className='hover:underline hover:text-green-500 dark:hover:text-green-300'
						>
							{item.name}
						</div>
					))}
					<ModeToggle />
					<LanguageToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
