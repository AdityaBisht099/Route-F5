import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import PageTransition from "../components/PageTransition";
import DashboardNavbar from "../components/DashboardNavbar";
import GoalCard from "../components/GoalCard";
import RoadmapCard from "../components/RoadmapCard";
import AIInsightCard from "../components/AIInsightCard";
import { connectMongoose } from "../lib/mongoose";
import Profile from "../models/Profile";

export default function Dashboard() {
	const { data: session } = useSession();
	const shouldReduceMotion = useReducedMotion();
	// Demo data for placeholders
	const userName = session?.user?.name || "Student";
	const goals = [
		{ title: "Finish Semester Project", percent: 45, accent: "violet" as const },
		{ title: "Prepare for Math Exam", percent: 70, accent: "sky" as const },
		{ title: "Daily Reading Habit", percent: 20, accent: "emerald" as const },
	];
	const roadmaps = [
		{ goal: "Semester Project", currentStep: 2, totalSteps: 5, steps: ["Outline", "Research", "Prototype", "Write-up", "Presentation"] },
		{ goal: "Math Exam", currentStep: 3, totalSteps: 6, steps: ["Syllabus", "Formulas", "Practice Set 1", "Practice Set 2", "Mock Test", "Revise"] },
	];
	const insights = [
		{ label: "Next skill to learn", description: "Focus on time-blocking to improve study consistency." },
		{ label: "Recommended action", description: "Schedule a 30-min review for your project prototype today." },
	];

	return (
		<>
			<Head>
				<title>Route F5 — Dashboard</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Your goals and progress at a glance." />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</Head>

			<main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
				<DashboardNavbar />
				<PageTransition>
					<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">

						{/* Hero */}
						<section className="mt-8 rounded-2xl bg-gradient-to-r from-sky-50 via-violet-50 to-fuchsia-50 dark:from-sky-950/30 dark:via-violet-950/30 dark:to-fuchsia-950/30 p-6 sm:p-8">
							<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
								<div>
									<motion.h1 
										initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }} 
										animate={{ opacity: 1, y: 0 }} 
										transition={{ duration: 0.6 }} 
										className="text-2xl font-semibold tracking-tight sm:text-3xl dark:text-white"
									>
										Welcome, {userName}
									</motion.h1>
									<p className="mt-1 text-slate-600 dark:text-slate-400">Plan. Track. Achieve.</p>
								</div>
								<motion.a
									href="#start"
									whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
									whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
									className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition-all hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400/50"
								>
									Start Now
								</motion.a>
							</div>

							{/* Quick summary */}
							<div className="mt-5 grid grid-cols-3 gap-4 sm:max-w-md">
								<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-4 text-center">
									<div className="text-xs text-slate-500 dark:text-slate-400">Total Goals</div>
									<div className="mt-1 text-lg font-semibold dark:text-white">{goals.length}</div>
								</div>
								<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-4 text-center">
									<div className="text-xs text-slate-500 dark:text-slate-400">Completed</div>
									<div className="mt-1 text-lg font-semibold dark:text-white">1</div>
								</div>
								<div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-4 text-center">
									<div className="text-xs text-slate-500 dark:text-slate-400">Streak</div>
									<div className="mt-1 text-lg font-semibold dark:text-white">3 days</div>
								</div>
							</div>
						</section>

						{/* Goals Section */}
						<section id="start" className="mt-10">
							<div className="flex items-center justify-between">
								<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Goals</h2>
								<button className="sticky top-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-700">+ Add Goal</button>
							</div>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{goals.map((g, idx) => (
									<GoalCard key={idx} title={g.title} percent={g.percent} accent={g.accent} />
								))}
							</div>
						</section>

						{/* Roadmaps / Steps */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Roadmaps</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								{roadmaps.map((r, idx) => (
									<RoadmapCard key={idx} goal={r.goal} currentStep={r.currentStep} totalSteps={r.totalSteps} steps={r.steps} />
								))}
							</div>
						</section>

						{/* AI Suggestions / Insights */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">AI Suggestions</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{insights.map((i, idx) => (
									<AIInsightCard key={idx} label={i.label} description={i.description} />
								))}
							</div>
						</section>

						{/* Optional Community / Motivation */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Motivation</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-sm">
									<p className="text-sm text-slate-600 dark:text-slate-300">"Small progress is still progress. Keep going!"</p>
								</div>
								<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-sm">
									<p className="text-sm text-slate-600 dark:text-slate-300">Leaderboard coming soon...</p>
								</div>
							</div>
						</section>
					</div>
				</PageTransition>
			</main>
		</>
	);
}

// Protect page with SSR redirect when unauthenticated and load profile
export async function getServerSideProps(context: any) {
	const session = await getSession(context);
	if (!session) {
		return { redirect: { destination: "/signin", permanent: false } };
	}
	await connectMongoose();
	const doc = await Profile.findOne({ authUserId: (session as any).user?.id }).lean();
	return { props: { session, profile: doc ? JSON.parse(JSON.stringify(doc)) : null } };
}




