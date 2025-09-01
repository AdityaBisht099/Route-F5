import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import PageTransition from "../components/PageTransition";

export default function SignIn() {
	return (
		<>
			<Head>
				<title>Route F5 — Sign In</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Choose your sign in method: Google, GitHub, or Mobile." />
			</Head>

			<main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 antialiased">
				{/* Ambient background accents */}
				<motion.div aria-hidden initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 0.6, scale: 1 }} transition={{ duration: 0.8 }} className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-sky-400 blur-3xl" />
				<motion.div aria-hidden initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="pointer-events-none absolute -bottom-28 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-300 via-cyan-300 to-sky-300 blur-3xl" />

				<PageTransition>
					<div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">
						<div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h1 className="text-center text-xl font-semibold tracking-tight">Sign in to Route F5</h1>
							<p className="mt-1 text-center text-sm text-slate-600">Sign in to access your personalized dashboard</p>

							<div className="mt-6 space-y-3">
								{/* Google */}
								<motion.button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-slate-50">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
										<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.915 32.91 29.383 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.868 6.053 29.711 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
										<path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.868 6.053 29.711 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
										<path fill="#4CAF50" d="M24 44c5.304 0 10.132-2.034 13.78-5.343l-6.366-5.374C29.405 35.091 26.833 36 24 36c-5.362 0-9.904-3.107-11.285-7.429l-6.53 5.027C9.488 39.556 16.227 44 24 44z"/>
										<path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.133 3.41-3.623 6.125-6.883 7.602.001-.001.002-.001.003-.002l6.366 5.374C33.615 41.194 40 36 40 24c0-1.341-.138-2.65-.389-3.917z"/>
									</svg>
									Continue with Google
								</motion.button>

								{/* GitHub */}
								<motion.button disabled title="Coming soon" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.0 }} className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition opacity-70">
									<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58l-.02-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.82.58A12 12 0 0012 .5z"/></svg>
									Continue with GitHub
								</motion.button>

								{/* Mobile */}
								<motion.button disabled title="Coming soon" whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.0 }} className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition opacity-70">
									<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M11 19h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
									Continue with Mobile
								</motion.button>
							</div>

							<p className="mt-6 text-center text-xs text-slate-500">By continuing, you agree to our <Link href="#" className="underline">Terms</Link> and <Link href="#" className="underline">Privacy Policy</Link>.</p>
						</div>

						<p className="mt-6 text-center text-sm text-slate-600">New here? <Link href="/explore" className="font-medium text-slate-900 underline-offset-4 hover:underline">Explore the Dashboard</Link></p>
					</div>
				</PageTransition>
			</main>
		</>
	);
}


