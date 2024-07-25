import Link from "next/link";

export default function ErrorPage() {
	return (
		<div className='flex justify-center items-center'>
			<p className='text-4xl'>Sorry, something went wrong</p>
			<Link href={"/login"}>Back to login</Link>
		</div>
	);
}
