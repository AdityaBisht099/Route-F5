import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 — Route F5</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900 px-4">
				<div className="max-w-md w-full text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-9xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
						<h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Page Not Found</h2>
						<p className="text-slate-600 dark:text-slate-400 mb-8">
							The page you're looking for doesn't exist or has been moved.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/"
								className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
							>
								<Home className="h-4 w-4" />
								Go Home
							</Link>
							<button
								onClick={() => window.history.back()}
								className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
							>
								<ArrowLeft className="h-4 w-4" />
								Go Back
							</button>
						</div>
					</motion.div>
				</div>
			</main>
		</>
	);
}

