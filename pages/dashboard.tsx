import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getSession, useSession, signOut } from "next-auth/react";
import PageTransition from "../components/PageTransition";
import GoalCard from "../components/GoalCard";
import RoadmapCard from "../components/RoadmapCard";
import AIInsightCard from "../components/AIInsightCard";
import { connectMongoose } from "../lib/mongoose";
import Profile from "../models/Profile";

export default function Dashboard() {
	const { data: session } = useSession();
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

			<main className="min-h-screen bg-white text-slate-900 antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
				<PageTransition>
					<div className="mx-auto max-w-6xl px-6 py-8">
						{/* Top navigation / shortcuts */}
						<nav className="flex items-center justify-between">
							<div className="flex items-center gap-4 text-slate-600">
								<Link href="/dashboard" className="text-sm hover:text-slate-900">Goals</Link>
								<Link href="/dashboard" className="text-sm hover:text-slate-900">Roadmaps</Link>
								<Link href="/dashboard" className="text-sm hover:text-slate-900">Achievements</Link>
								<Link href="/dashboard" className="text-sm hover:text-slate-900">Profile</Link>
							</div>
							<div className="flex items-center gap-3">
								{session?.user?.image && <img src={session.user.image} alt={session.user.name || ""} className="h-7 w-7 rounded-full" />}
								<span className="hidden text-xs text-slate-600 sm:inline">{session?.user?.email}</span>
								<button onClick={() => signOut({ callbackUrl: "/signin" })} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">Sign out</button>
							</div>
						</nav>

						{/* Hero */}
						<section className="mt-8 rounded-2xl bg-gradient-to-r from-sky-50 via-violet-50 to-fuchsia-50 p-6">
							<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
								<div>
									<motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-2xl font-semibold tracking-tight sm:text-3xl">
										Welcome, {userName}
									</motion.h1>
									<p className="mt-1 text-slate-600">Plan. Track. Achieve.</p>
								</div>
								<motion.a
									href="#start"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition-all hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400/50"
								>
									Start Now
								</motion.a>
							</div>

							{/* Quick summary */}
							<div className="mt-5 grid grid-cols-3 gap-4 sm:max-w-md">
								<div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
									<div className="text-xs text-slate-500">Total Goals</div>
									<div className="mt-1 text-lg font-semibold">{goals.length}</div>
								</div>
								<div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
									<div className="text-xs text-slate-500">Completed</div>
									<div className="mt-1 text-lg font-semibold">1</div>
								</div>
								<div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
									<div className="text-xs text-slate-500">Streak</div>
									<div className="mt-1 text-lg font-semibold">3 days</div>
								</div>
							</div>
						</section>

						{/* Goals Section */}
						<section id="start" className="mt-10">
							<div className="flex items-center justify-between">
								<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Goals</h2>
								<button className="sticky top-4 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">+ Add Goal</button>
							</div>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{goals.map((g, idx) => (
									<GoalCard key={idx} title={g.title} percent={g.percent} accent={g.accent} />
								))}
							</div>
						</section>

						{/* Roadmaps / Steps */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Roadmaps</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								{roadmaps.map((r, idx) => (
									<RoadmapCard key={idx} goal={r.goal} currentStep={r.currentStep} totalSteps={r.totalSteps} steps={r.steps} />
								))}
							</div>
						</section>

						{/* AI Suggestions / Insights */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">AI Suggestions</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{insights.map((i, idx) => (
									<AIInsightCard key={idx} label={i.label} description={i.description} />
								))}
							</div>
						</section>

						{/* Optional Community / Motivation */}
						<section className="mt-10">
							<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Motivation</h2>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
									<p className="text-sm text-slate-600">“Small progress is still progress. Keep going!”</p>
								</div>
								<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
									<p className="text-sm text-slate-600">Leaderboard coming soon...</p>
								</div>
							</div>
						</section>

						{/* Footer */}
						<footer className="mt-12 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
							<div className="flex flex-wrap items-center justify-center gap-4">
								<Link href="#" className="hover:text-slate-700">About</Link>
								<Link href="#" className="hover:text-slate-700">Contact</Link>
								<Link href="#" className="hover:text-slate-700">Privacy</Link>
							</div>
						</footer>
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




