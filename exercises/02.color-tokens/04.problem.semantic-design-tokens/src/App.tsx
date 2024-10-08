export default function ColorDesignTokens() {
	// 🐨 Update the colors in the UI to use the new semantic color tokens

	// 💰 I've put an 👀 emoji above the elements that need attention!
	return (
		// 👀
		<div className="bg-grey-5 min-h-screen py-6 sm:py-12">
			<div className="mx-auto max-w-4xl p-6 sm:p-8">
				{/* 👀 */}
				<div className="bg-grey-0 border-grey-20 rounded border p-6 sm:p-8">
					{/* 👀 */}
					<p className="text-grey-40 text-xs font-semibold uppercase tracking-widest">
						Special Deal
					</p>
					{/* 👀 */}
					<h2 className="text-grey-100 mt-1 text-2xl font-semibold sm:text-3xl">
						Opportunity of a lifetime
					</h2>
					{/* 👀 */}
					<p className="text-grey-60 mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
						sint dicta quas explicabo rem quisquam consectetur aperiam facere
						temporibus aut. Voluptatibus minus nesciunt qui voluptas fugiat
						voluptate repudiandae error asperiores.
					</p>

					{/* 👀 */}
					<a
						href="#"
						className="bg-grey-80 text-grey-5 hover:bg-grey-100 mt-6 inline-block rounded px-4 py-2 text-sm font-medium"
					>
						Learn more
					</a>
				</div>
				<div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
					<div className="bg-teal grid place-items-center rounded px-8 py-12">
						{/* 👀 */}
						<span className="text-grey-100/60 text-sm font-medium uppercase tracking-widest">
							Conversion rate
						</span>
						{/* 👀 */}
						<span className="text-grey-100 text-4xl font-black sm:text-6xl">
							9.86%
						</span>
					</div>
					<div className="bg-purple grid place-items-center rounded px-8 py-12">
						{/* 👀 */}
						<span className="text-grey-5/60 text-sm font-medium uppercase tracking-widest">
							customers
						</span>
						{/* 👀 */}
						<span className="text-grey-5 text-4xl font-black sm:text-6xl">
							1M+
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
