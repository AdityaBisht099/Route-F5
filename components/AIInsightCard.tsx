import { motion } from "framer-motion";

export type AIInsightCardProps = {
	label: string;
	description: string;
};

export default function AIInsightCard({ label, description }: AIInsightCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
		>
			<h3 className="text-sm font-medium text-slate-800">{label}</h3>
			<p className="mt-2 text-sm text-slate-600">{description}</p>
		</motion.div>
	);
}


