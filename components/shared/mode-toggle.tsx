'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()

	return resolvedTheme === 'dark' ? (
		<Button variant='ghost' size='icon' onClick={() => setTheme('light')}>
			<SunIcon />
		</Button>
	) : (
		<Button variant='ghost' size='icon' onClick={() => setTheme('dark')}>
			<MoonIcon />
		</Button>
	)
}
