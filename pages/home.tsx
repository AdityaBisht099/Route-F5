import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

export default function HomePage() {
	const shouldReduceMotion = useReducedMotion();
 
	const fadeUp = (delay = 0) => ({
		initial: shouldReduceMotion ? undefined : { opacity: 0, y: 6 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.45, delay },
	});

	return (
		<>
			{/* Skip link for keyboard users */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900 focus:shadow"
			>
				Skip to content
			</a>
			{/* SEO/meta + Inter font for clean, modern typography */}
			<Head>
				<title>Route F5 — Home</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Plan, Track & Achieve Your Goals Efficiently with Route F5." />
				<meta property="og:title" content="Route F5 — Plan, Track & Achieve" />
				<meta property="og:description" content="Plan, Track & Achieve Your Goals Efficiently with Route F5." />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary" />
				<meta name="theme-color" content="#0ea5e9" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</Head>

			{/* Minimal, centered layout */}
			<main id="main-content" className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>

				<div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12">
					{/* Hero Section */}
					<div className="flex flex-col items-center text-center mb-16">
						{/* Title */}
						<motion.h1
							{...fadeUp(0)}
							className="text-center text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
						>
							<span className="text-slate-900 dark:text-white">Route F5</span>
						</motion.h1>

						{/* Subheading */}
						<motion.p
							{...fadeUp(0.05)}
							className="mt-4 max-w-2xl text-center text-base text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl"
						>
							AI‑driven roadmaps to plan smarter, learn faster, and grow together.
						</motion.p>

						{/* CTA */}
						<motion.div
							{...fadeUp(0.1)}
							className="mt-8 flex flex-col sm:flex-row items-center gap-4"
						>
							<Link
								href="/dashboard"
								aria-label="Get started with Route F5"
								className="inline-flex items-center justify-center rounded-md bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 transition-colors hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400/50 sm:text-base"
							>
								Get started
							</Link>
							<a
								href="https://github.com/AdityaBisht07/Route-F5"
								className="text-sm font-medium text-slate-600 dark:text-slate-400 underline-offset-4 hover:text-slate-900 dark:hover:text-slate-200 hover:underline sm:text-base"
								rel="noopener noreferrer"
								target="_blank"
							>
								View GitHub
							</a>
						</motion.div>
					</div>

					{/* Features Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
						{[
							{ icon: Target, title: "Goal Tracking", desc: "Set and track your goals with visual progress indicators" },
							{ icon: Zap, title: "AI Insights", desc: "Get personalized recommendations powered by AI" },
							{ icon: Users, title: "Community", desc: "Connect with other students and share your journey" },
							{ icon: TrendingUp, title: "Roadmaps", desc: "Step-by-step roadmaps to achieve your goals faster" },
						].map((feature, idx) => (
							<motion.div
								key={feature.title}
								{...fadeUp(0.15 + idx * 0.05)}
								className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<feature.icon className="h-8 w-8 text-slate-900 dark:text-white mb-3" />
								<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
								<p className="text-xs text-slate-600 dark:text-slate-400">{feature.desc}</p>
							</motion.div>
						))}
					</div>

					{/* Minimal footer note */}
					<motion.p
						{...fadeUp(0.4)}
						className="absolute bottom-6 text-center text-xs text-slate-500 dark:text-slate-500 sm:text-sm"
					>
						Welcome back to Route F5
					</motion.p>
				</div>
			</main>
		</>
	);
}




