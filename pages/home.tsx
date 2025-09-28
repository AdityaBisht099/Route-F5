import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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
			<main id="main-content" className="relative min-h-screen overflow-hidden bg-white text-slate-900 antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>

				<div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6">
					{/* Title */}
					<motion.h1
						{...fadeUp(0)}
						className="text-center text-4xl font-semibold tracking-tight sm:text-5xl"
					>
						<span className="text-slate-900">Route F5</span>
					</motion.h1>

					{/* Subheading */}
					<motion.p
						{...fadeUp(0.05)}
						className="mt-3 max-w-xl text-center text-base text-slate-600 sm:text-lg"
					>
						AI‑driven roadmaps to plan smarter, learn faster, and grow together.
					</motion.p>

					{/* CTA */}
					<motion.div
						{...fadeUp(0.1)}
						className="mt-7 flex items-center gap-4"
					>
						<Link
							href="/home"
							aria-label="Get started with Route F5"
							className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50 sm:text-base"
						>
							Get started
						</Link>
						<a
							href="https://github.com/AdityaBisht07/Route-F5"
							className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline sm:text-base"
							rel="noopener noreferrer"
							target="_blank"
						>
							View GitHub
						</a>
					</motion.div>

					{/* Minimal footer note */}
					<p className="absolute bottom-6 text-center text-xs text-slate-500 sm:text-sm">Welcome back to Route F5</p>
				</div>
			</main>
		</>
	);
}




