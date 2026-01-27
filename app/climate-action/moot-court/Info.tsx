"use client";

import Image from "next/image";
import Court from "@/public/court.svg";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Info() {
	return (
		<section className="container mx-auto">
			<div className="flex flex-col mx-5 xl:mx-20 mt-10 mb-20 gap-y-25">
				<MootCourt />
				<TabsComponents />
				<SelectComponent />
			</div>
		</section>
	);
}

function MootCourt() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-7">
			<div className="flex flex-col gap-y-5 text-center md:text-left">
				<h1 className="text-2xl sm:text-4xl font-semibold">
					<span className="text-sedGreen">Moot</span> Court
					<span className="text-sedGreen">.</span>
				</h1>

				<p className="text-sm max-w-[27rem]">
					Our organization hosts moot court events under the Environmental
					Education program of the SED Foundation. These events aim to create
					more activists from the legal arena who can fight for the environment
					before various courts and protect our natural surroundings.
					Participants engage in simulated court proceedings, gaining valuable
					experience and knowledge to advocate for environmental justice.
				</p>
			</div>

			<Image
				src={Court}
				priority
				alt="3 judges sitting in the courtroom"
				className="w-[20rem] sm:w-[24rem] lg:w-[30rem]"
			/>
		</div>
	);
}

// For small screen devices
function SelectComponent() {
	const [selectedValue, setSelectedValue] = useState("participants");

	// Render content based on the selected value
	function renderContent(selectedValue: string) {
		switch (selectedValue) {
			case "participants":
				return <Participants />;
			case "awardees":
				return <Awardees />;
			case "judges-&-guests":
				return <JudgesAndGuests />;
			case "bench-memorial":
				return <BenchMemorial />;
			default:
				return null;
		}
	}

	return (
		<div className="flex sm:hidden flex-col justify-center items-center gap-y-5">
			<Select
				defaultValue="participants"
				onValueChange={(value) => setSelectedValue(value)}
			>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="participants">Participants</SelectItem>
					<SelectItem value="awardees">Awardees</SelectItem>
					<SelectItem value="judges-&-guests">Judges & guests</SelectItem>
					<SelectItem value="bench-memorial">Bench memorial</SelectItem>
				</SelectContent>
			</Select>

			{renderContent(selectedValue)}
		</div>
	);
}

// For wide screen devices
function TabsComponents() {
	return (
		<div className="hidden sm:flex justify-center">
			<Tabs
				defaultValue="participants"
				className="flex flex-col items-center gap-y-5"
			>
				{/* Triggers */}
				<TabsList>
					<TabsTrigger value="participants">Participants</TabsTrigger>
					<TabsTrigger value="awardees">Awardees</TabsTrigger>
					<TabsTrigger value="judges-&-guests">Judges & guests</TabsTrigger>
					<TabsTrigger value="bench-memorial">Bench memorials</TabsTrigger>
				</TabsList>

				{/* Contents */}
				<TabsContent value="participants">
					<Participants />
				</TabsContent>

				<TabsContent value="awardees">
					<Awardees />
				</TabsContent>

				<TabsContent value="judges-&-guests">
					<JudgesAndGuests />
				</TabsContent>

				<TabsContent value="bench-memorial">
					<BenchMemorial />
				</TabsContent>
			</Tabs>
		</div>
	);
}

// All the components to be displayed beneath the Tabs/Select
function Participants() {
	return <p>Participants will be added here.</p>;
}
function Awardees() {
	return <p>Awardees will be added here.</p>;
}
function JudgesAndGuests() {
	return <p>Judges & guests will be added here.</p>;
}
function BenchMemorial() {
	return <p>Bench memorials will be added here.</p>;
}
