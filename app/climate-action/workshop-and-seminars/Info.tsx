import Image from "next/image";
import WorkshopAndSeminarImage from "@/public/workshop-and-seminars.png";
import Javed from "@/public/javed.jpg";
import Seminar1 from "@/public/seminar1.jpg";
import Seminar2 from "@/public/seminar2.jpg";

export default function Info() {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-20">
				<WorkshopAndSeminars />
				<WeAreInteractive />
			</div>
		</section>
	);
}

function WorkshopAndSeminars() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<h1 className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Workshop</span> And Seminars
					<span className="text-sedGreen">.</span>
				</h1>

				<p className="text-sm max-w-[27rem]">
					We carefully curate a diverse range of topics, bringing together
					experts, activists, and community leaders to share insights and
					inspire action. From hands-on workshops that teach practical skills to
					thought-provoking seminars that explore the latest in climate science
					and policy, our programs are designed to educate, motivate, and
					mobilize individuals and communities towards sustainable practices and
					informed decision-making.
				</p>
			</div>

			<Image
				src={WorkshopAndSeminarImage}
				priority
				alt="A seminar taking place"
				className="w-[20rem] sm:w-[24rem] lg:w-[32rem]"
			/>
		</div>
	);
}

function WeAreInteractive() {
	return (
		<div className="flex flex-col items-center gap-y-18">
			<div className="flex flex-col items-center text-center">
				<p className="text-2xl sm:text-4xl font-semibold">
					We Are <span className="text-sedGreen">Interactive</span>
				</p>

				<p className="mt-4 max-w-[32rem] text-sm">
					We believe in the power of hands-on learning and collaborative
					discussions. Our seminars and workshops provide an engaging platform
					for participants to interact, share ideas, and gain practical
					knowledge. Through these interactive sessions, we foster a dynamic
					environment where everyone can contribute, learn from each other, and
					develop actionable solutions for climate change.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-[45rem] sm:h-[60rem] md:h-[40rem] lg:h-[50rem]">
				<div className="relative col-span-1">
					<Image
						src={Javed}
						alt="Javed Rasin, the founder of SED Foundation"
						className="object-cover"
						fill
						priority
						placeholder="blur"
					/>
				</div>

				<div className="relative col-span-1 md:col-span-2">
					<Image
						src={Seminar1}
						alt="People attending seminar"
						className="object-cover"
						fill
						priority
						placeholder="blur"
					/>
				</div>

				<div className="relative col-span-1 md:col-span-3">
					<Image
						src={Seminar2}
						alt="People on stage for taking a group photo"
						className="object-cover"
						fill
						priority
						placeholder="blur"
					/>
				</div>
			</div>
		</div>
	);
}
