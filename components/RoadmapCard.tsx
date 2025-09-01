import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type RoadmapCardProps = {
	goal: string;
	currentStep: number;
	totalSteps: number;
	steps: string[];
};

export default function RoadmapCard({ goal, currentStep, totalSteps, steps }: RoadmapCardProps) {
	const [open, setOpen] = useState(true);
	const progress = Math.min(100, Math.round((currentStep / Math.max(1, totalSteps)) * 100));
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-medium text-slate-800">{goal}</h3>
				<button onClick={() => setOpen((v) => !v)} className="text-xs text-slate-500 underline-offset-4 hover:underline">
					{open ? "Hide" : "Show"}
				</button>
			</div>
			<div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
				<div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" style={{ width: `${progress}%` }} />
			</div>
			<AnimatePresence initial={false}>
				{open && (
					<motion.ul
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: "easeInOut" }}
						className="mt-4 space-y-2"
					>
						{steps.map((step, idx) => (
							<li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
								<span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium ${idx + 1 <= currentStep ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
									{idx + 1}
								</span>
								<span className={`${idx + 1 <= currentStep ? "line-through decoration-emerald-400" : ""}`}>{step}</span>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}


