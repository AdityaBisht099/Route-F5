import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
	return (
		<>
			{/* SEO/meta + Inter font for clean, modern typography */}
			<Head>
				<title>Route F5 — Home</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Plan, Track & Achieve Your Goals Efficiently with Route F5." />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</Head>

			{/* Minimal, centered layout */}
			<main className="relative min-h-screen overflow-hidden bg-white text-slate-900 antialiased" style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
				{/* Subtle background accent */}
				<motion.div
					aria-hidden
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 0.5, scale: 1 }}
					transition={{ duration: 0.9, ease: "easeOut" }}
					className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-400/30 via-indigo-400/30 to-fuchsia-400/30 blur-3xl"
				/>

				<div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6">
					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="text-center text-4xl font-semibold tracking-tight sm:text-5xl"
					>
						<span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Route F5</span>
					</motion.h1>

					{/* Subheading */}
					<motion.p
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
						className="mt-3 max-w-xl text-center text-base text-slate-600 sm:text-lg"
					>
						Plan, Track & Achieve Your Goals Efficiently
					</motion.p>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
						className="mt-7"
					>
						<Link
							href="#"
							className="group inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400/50 sm:text-base"
						>
							<motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2">
								Explore
								<svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</motion.span>
						</Link>
					</motion.div>

					{/* Minimal footer note */}
					<p className="absolute bottom-6 text-center text-xs text-slate-500 sm:text-sm">Welcome back to Route F5</p>
				</div>
			</main>
		</>
	);
}




