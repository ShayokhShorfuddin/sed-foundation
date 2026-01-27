import Image from "next/image";
import Tree from "@/public/tree-plantation.svg";
import Dhaka1 from "@/public/dhaka1.jpg";
import Dhaka2 from "@/public/dhaka2.jpg";
import Dhaka3 from "@/public/dhaka3.jpg";

export default function Info() {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-28">
				<TreePlantation />
				<CityWithChallenges />
				<CFADProgram />
				<RayOfHope />
			</div>
		</section>
	);
}

function TreePlantation() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<h1 className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Tree</span> Plantation
					<span className="text-sedGreen">.</span>
				</h1>

				<p className="text-sm max-w-[27rem]">
					Our organization is committed to advancing tree plantation efforts. We
					recognize that tree planting serves as a pivotal strategy in
					addressing climate change, rehabilitating natural ecosystems, and
					enhancing the well-being of communities globally. Through our
					initiatives focused on tree plantation, we aspire to foster a more
					sustainable and healthier environment for future generations.
				</p>
			</div>

			<Image
				src={Tree}
				priority
				alt="A big green tree"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function CityWithChallenges() {
	return (
		<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					A <span className="text-[#a7a279]">city</span> with challenges
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					Dhaka, the capital city of Bangladesh, faces a critical environmental
					crisis despite its significance as a major urban center. With a forest
					cover of less than 5-6% of its total area, the city ranks as one of
					the most densely populated worldwide, leaving limited space for
					traditional afforestation.
				</p>
			</div>

			<Image
				src={Dhaka2}
				placeholder="blur"
				alt="A polluted state of Dhaka city"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function CFADProgram() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					The <span className="text-sedGreen">CFAD</span> program
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					Recognizing the urgent need for environmental improvement, the SED
					Foundation has initiated the "Circle Forestation around Dhaka (CFAD)"
					program. This initiative aims to increase the city's green cover
					through a comprehensive approach that involves social and public
					participation.
				</p>
			</div>

			<Image
				src={Dhaka1}
				placeholder="blur"
				alt="A drone shot of Dhaka city"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

function RayOfHope() {
	return (
		<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<p className="text-2xl sm:text-4xl font-semibold">
					A <span className="text-sedGreen">ray</span> of hope
					<span className="text-sedGreen">.</span>
				</p>

				<p className="text-sm max-w-[27rem]">
					The CFAD program will focus on the districts surrounding Dhaka,
					including Narayanganj, Gazipur, Narsingdi, Manikganj, Munsiganj, and
					Faridpur. By expanding forestation efforts in these areas, the SED
					Foundation seeks to create a greener belt around the capital city,
					mitigating environmental hazards and improving the overall quality of
					life for residents.
				</p>
			</div>

			<Image
				src={Dhaka3}
				placeholder="blur"
				alt="A drone shot of a clean and sunny Dhaka city"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}
