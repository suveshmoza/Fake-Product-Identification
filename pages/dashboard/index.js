import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="container mt-10">
			<div className="flex justify-center item-center gap-3">
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-1">
					<Image
						alt="add product"
						height="200"
						width="200"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizOJygfeh_MKf7Q8NVtaUeeT0SGIp6fdO9ylSJp37ONRkzf62cIlQUgQqDficRw8dzc4DTzGNQwI&usqp=CAU&ec=48665699"
					/>
					<Link
						href="/dashboard/add"
						className="border rounded-lg bg-blue-600 text-white px-3 py-2 m-2"
					>
						Add Product
					</Link>
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-1">
					<Image
						alt="edit product"
						height="200"
						width="200"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHPr2Jp_C_CASaoIoLyqlLschvDHizMPeP4feTA1vhA8T2eaOzZBPpOEf1nDvf_uY3MMDITflW18&usqp=CAU&ec=48665699"
					/>
					<Link
						href="/dashboard/edit"
						className="border rounded-lg bg-red-600 text-white px-3 py-2 m-2"
					>
						Edit Product
					</Link>
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-1">
					<Image
						alt="delete product"
						height="200"
						width="200"
						src="data:image/png;base64,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"
					/>
					<Link
						href="/dashboard/delete"
						className="border rounded-lg bg-red-600 text-white px-3 py-2 m-2"
					>
						Delete Product
					</Link>
				</div>
			</div>
		</main>
	);
}
