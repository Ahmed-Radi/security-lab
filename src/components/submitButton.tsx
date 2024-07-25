import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ISubmitButton {
	children: React.ReactNode;
	isLoading?: boolean;
	className?: string;
}

const SubmitButton = ({
	children,
	isLoading,
	className,
}: ISubmitButton) => {
	return (
		<Button
			type='submit'
			disabled={isLoading}
      // shad-primary-btn w-full
			className={className ?? "shad-primary-btn"}>
			{isLoading ? (
				<div className='flex items-center gap-4'>
					<Image
						width={24}
						height={24}
						src='/assets/icons/loader.svg'
						alt='loading'
						className='animate-spin'
					/>
					loading...
				</div>
			) : (
				children
			)}
		</Button>
	);
};

export default SubmitButton;
