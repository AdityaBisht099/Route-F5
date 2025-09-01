import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function Home() {
	return (
		<>
			{/* SEO/meta */}
			<Head>
				<title>Route F5</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Route F5 — a minimal, modern starter landing page." />
			</Head>

			{/* Fullscreen, centered layout with vibrant but professional background */}
			<main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 antialiased">
				{/* Ambient gradient orbs */}
				<motion.div
					aria-hidden
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 0.6, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
					className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 blur-3xl"
				/>
				<motion.div
					aria-hidden
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 0.5, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
					className="pointer-events-none absolute -bottom-28 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300 blur-3xl"
				/>

				<PageTransition>
					<div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6">
					{/* Animated brand/title */}
					<motion.h1
						initial={{ opacity: 0, y: 8, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className="text-center text-5xl font-semibold tracking-tight sm:text-6xl"
					>
						<motion.span
							// Subtle floating effect to keep the hero feeling alive
							animate={{ y: [0, -4, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(99,102,241,0.25)]"
						>
							Route F5
						</motion.span>
					</motion.h1>

					{/* Supportive subheading */}
					<motion.p
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
						className="mt-4 max-w-xl text-center text-base text-slate-600 sm:text-lg"
					>
						Plan, Track & Achieve Your Goals Efficiently
					</motion.p>

					{/* Call-to-action */}
					<motion.div
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
						className="mt-8"
					>
						<Link
							href="/signin"
							className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-transparent transition-all hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400/50 sm:text-base"
						>
							<motion.span
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="flex items-center gap-2"
							>
								Get Started
								<svg
									className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</motion.span>
						</Link>
					</motion.div>

					{/* Footer hint (optional, minimal) */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.7 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="pointer-events-none absolute bottom-6 text-center text-xs text-slate-500 sm:text-sm"
					>
						Built with Next.js, Tailwind CSS, and Framer Motion
					</motion.p>
					</div>
				</PageTransition>
			</main>
		</>
	);
}


