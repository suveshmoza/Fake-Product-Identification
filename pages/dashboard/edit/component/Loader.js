const Loader = () => {
	return (
		<div className="flex items-center justify-center mt-20">
			<div className="flex flex-col items-center">
				<div className="mb-4">
					<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
				</div>
				<p className="text-gray-900 text-xl font-semibold">Loading...</p>
			</div>
		</div>
	);
};

export default Loader;
