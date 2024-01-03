const Contact = () => {
	return (
		<div className=' w-full h-[80vh] bg-[url(/contact/1.svg)] bg-cover container px-20'>
			<div className=' flex h-[80vh] items-center gap-10'>
				<form className=' flex flex-col gap-4'>
					<h1 className='text-4xl'>Contact US</h1>
					<input
						type='text'
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='Your Name'
					/>
					<input
						type='text'
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='Your Number'
					/>
					<textarea
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						cols='30'
						rows='10'
						placeholder='Message'
					></textarea>
				</form>

				<div className=' flex flex-col gap-6'>
					<div>
						<p>Tashkent, Uzbekistan</p>
					</div>
					<div>
						<p>+(12)345-67-89</p>
					</div>
					<div>
						<p>info@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
