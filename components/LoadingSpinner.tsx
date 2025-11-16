import { motion } from "framer-motion";

interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	className?: string;
}

export default function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-8 w-8",
		lg: "h-12 w-12",
	};

	return (
		<div className={`flex items-center justify-center ${className}`}>
			<motion.div
				className={`${sizeClasses[size]} border-2 border-slate-300 dark:border-slate-600 border-t-slate-900 dark:border-t-white rounded-full`}
				animate={{ rotate: 360 }}
				transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
}

