import { motion } from "framer-motion";

export type GoalCardProps = {
	/** Goal title */
	title: string;
	/** Completion percentage 0-100 */
	percent: number;
	/** Optional color accent: sky, violet, emerald, amber, fuchsia */
	accent?: "sky" | "violet" | "emerald" | "amber" | "fuchsia";
};

const accentMap: Record<NonNullable<GoalCardProps["accent"]>, { bar: string; glow: string }> = {
	sky: { bar: "from-sky-400 to-cyan-400", glow: "bg-sky-400/20" },
	violet: { bar: "from-violet-500 to-fuchsia-500", glow: "bg-violet-500/20" },
	emerald: { bar: "from-emerald-500 to-teal-400", glow: "bg-emerald-500/20" },
	amber: { bar: "from-amber-500 to-orange-400", glow: "bg-amber-500/20" },
	fuchsia: { bar: "from-fuchsia-500 to-pink-500", glow: "bg-fuchsia-500/20" },
};

export default function GoalCard({ title, percent, accent = "violet" }: GoalCardProps) {
	const cl = accentMap[accent];
	const safePercent = Math.max(0, Math.min(100, percent));

	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-sm transition-shadow hover:shadow-md"
		>
			{/* soft glow */}
			<div className={`pointer-events-none absolute -inset-12 -z-10 rounded-full ${cl.glow} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />

			<div className="flex items-start justify-between gap-4">
				<h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">{title}</h3>
				<span className="text-xs tabular-nums text-slate-500 dark:text-slate-400">{safePercent}%</span>
			</div>

			{/* progress track */}
			<div className="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-700">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${safePercent}%` }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className={`h-full rounded-full bg-gradient-to-r ${cl.bar}`}
				/>
			</div>
		</motion.div>
	);
	}


