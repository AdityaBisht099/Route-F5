import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GoalCard from "../components/GoalCard";
import RoadmapCard from "../components/RoadmapCard";
import AIInsightCard from "../components/AIInsightCard";

export default function Explore() {
	const goals = [
		{ title: "Explore Feature Tour", percent: 60, accent: "violet" as const },
		{ title: "Sample Study Plan", percent: 35, accent: "sky" as const },
		{ title: "Reading Habit", percent: 80, accent: "emerald" as const },
	];
	const roadmaps = [
		{ goal: "Feature Tour", currentStep: 2, totalSteps: 4, steps: ["Overview", "Goals", "Roadmaps", "Insights"] },
		{ goal: "Study Plan", currentStep: 1, totalSteps: 3, steps: ["Syllabus", "Practice", "Review"] },
	];
	const insights = [
		{ label: "Tip", description: "Use small daily goals for consistent progress." },
		{ label: "Try This", description: "Create a roadmap to break big goals into steps." },
	];

	return (
		<>
			<Head>
				<title>Route F5 — Explore</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Preview the Route F5 dashboard experience." />
			</Head>
			<main className="min-h-screen bg-white text-slate-900 antialiased">
				<PageTransition>
					<div className="mx-auto max-w-6xl px-6 py-8">
						<nav className="flex items-center justify-between">
							<h1 className="text-lg font-semibold">Explore</h1>
							<Link href="/signin" className="text-sm text-slate-600 underline-offset-4 hover:underline">Sign in</Link>
						</nav>

						<section className="mt-6 rounded-2xl bg-gradient-to-r from-sky-50 via-violet-50 to-fuchsia-50 p-6">
							<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
								<div>
									<motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-xl font-semibold tracking-tight sm:text-2xl">Preview the Dashboard</motion.h2>
									<p className="mt-1 text-slate-600">See how goals, roadmaps, and insights look.</p>
								</div>
								<motion.a href="#goals" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition-all hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400/50">Explore</motion.a>
							</div>
						</section>

						<section id="goals" className="mt-8">
							<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Goals</h3>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{goals.map((g, idx) => (
									<GoalCard key={idx} title={g.title} percent={g.percent} accent={g.accent} />
								))}
							</div>
						</section>

						<section className="mt-10">
							<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Roadmaps</h3>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								{roadmaps.map((r, idx) => (
									<RoadmapCard key={idx} goal={r.goal} currentStep={r.currentStep} totalSteps={r.totalSteps} steps={r.steps} />
								))}
							</div>
						</section>

						<section className="mt-10">
							<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">AI Suggestions</h3>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{insights.map((i, idx) => (
									<AIInsightCard key={idx} label={i.label} description={i.description} />
								))}
							</div>
						</section>
					</div>
				</PageTransition>
			</main>
		</>
	);
}


