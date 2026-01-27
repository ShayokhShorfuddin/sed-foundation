import Image from "next/image";
import Teaching from "@/public/teaching.svg";
import Child1 from "@/public/child1.jpg";
import Child2 from "@/public/child2.jpg";
import Child3 from "@/public/child3.jpg";

export default function Info() {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-28">
				<ChildrenEngagement />
				<FosteringOurYoung />
				<TheNextGeneration />
				<ConnectedToNature />
			</div>
		</section>
	);
}

function ChildrenEngagement() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<h1 className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Children</span> Engagement
					<span className="text-sedGreen">.</span>
				</h1>

				<p className="text-sm max-w-[27rem]">
					We place a strong emphasis on child engagement as a cornerstone of its
					environmental initiatives. By involving children in tree plantation
					activities, the foundation aims to instill a sense of responsibility
					and connection to nature from a young age. This approach not only
					educates the younger generation about the importance of environmental
					conservation but also empowers them to take active roles in creating a
					sustainable future.
				</p>
			</div>

			<Image
				src={Teaching}
				priority
				alt="A girl teaching children about the environment"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function FosteringOurYoung() {
	return (
		<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Fostering</span> our young
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					Primary education is a fundamental human right, essential for building
					a just and equitable society. As a cornerstone of sustainable
					development, it provides a solid foundation for individual growth and
					societal progress. Beyond basic literacy and numeracy, primary
					education should instill ethical values, foster a sense of
					responsibility, and cultivate an understanding of the world around us.
				</p>
			</div>

			<Image
				src={Child1}
				placeholder="blur"
				alt="Child holding a flower"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function TheNextGeneration() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					The <span className="text-sedGreen">next</span> generation
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					To safeguard our planet, environmental education must be an integral
					part of the curriculum. By teaching children about the importance of
					nature, the benefits of tree planting, and the consequences of
					deforestation, we can inspire them to become environmentally conscious
					citizens.
				</p>
			</div>

			<Image
				src={Child2}
				alt="Child looking at a flower"
				placeholder="blur"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function ConnectedToNature() {
	return (
		<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Connected</span> to nature
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					Many children today are increasingly disconnected from the natural
					world, particularly in urban areas. Our program aims to bridge this
					gap by providing opportunities for hands-on experiences in nature.
					Through activities like planting trees and observing plant growth,
					children can develop a deep appreciation for the environment and a
					sense of stewardship for our planet.
				</p>
			</div>

			<Image
				src={Child3}
				placeholder="blur"
				alt="Child in the midst of tree"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}
