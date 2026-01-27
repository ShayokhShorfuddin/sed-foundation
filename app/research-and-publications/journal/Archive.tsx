"use client";

import { getIssues } from "@/sanity/utils/issues-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type IssuesCardType = {
	_id: string;
	_createdAt: Date;

	title: string;
	slug: string;
	coordinators: string;

	cardImage: {
		asset: {
			url: string;
		};
		alt: string;
	};
};

export type IssuesType = {
	_id: string;
	_createdAt: Date;

	title: string;
	slug: string;
	coordinators: string;

	cardImage: {
		asset: {
			url: string;
		};
		alt: string;
	};

	pdfUrl: string;

	articles: {
		title: string;
		authors: string;
		keywords: string;
		abstract: string;
		pdfUrl: string;
	}[];
};

export default function Archive() {
	const [issues, setIssues] = useState<IssuesCardType[]>([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchIssues() {
			try {
				const data = await getIssues();
				setIssues(data);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		fetchIssues();
	}, []);

	return (
		<>
			{/* Loading */}
			{isLoading && (
				<div className="mt-10">
					<svg
						aria-hidden="true"
						className="size-7 sm:size-8 md:size-9 lg:size-10 text-stone-200 animate-spin fill-sedGreen"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading</span>
				</div>
			)}

			{/* Error */}
			{!isLoading && isError && (
				<p className="mt-10 text-red-500 text-center">
					Error while loading issues.
					<br />
					Please try again later.
				</p>
			)}

			{/* No issues available */}
			{!isLoading && !isError && issues.length === 0 && (
				<p className="mt-10">No issues available for now.</p>
			)}

			{/* Issues available. Show Issues grid*/}
			{!isLoading && !isError && issues.length > 0 && (
				<section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mt-10">
					{issues.map((issue) => (
						<IssuesCard key={issue._id} {...issue} />
					))}
				</section>
			)}
		</>
	);
}

function IssuesCard({ title, slug, coordinators, cardImage }: IssuesCardType) {
	return (
		<Link href={`journal/${slug}`}>
			<div className="flex flex-col rounded-2xl p-4 border-2 border-stone-100 hover:border-sedGreen transition duration-300 ease-in-out h-full">
				<Image
					src={cardImage.asset.url}
					alt={cardImage.alt}
					priority
					width={300}
					height={500}
					className="rounded-xl"
				/>

				<h1 className="mt-5 text-xl">{title}</h1>

				<p className="mt-3 text-sm">
					<span className="text-sedGreen">
						{coordinators.includes(",")
							? "Editors-in-Chief"
							: "Editor-in-Chief"}
					</span>
					<br />
					{coordinators}
				</p>
			</div>
		</Link>
	);
}
