import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
	loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "primary", size = "md", fullWidth = false, loading = false, className = "", children, disabled, ...props }, ref) => {
		const shouldReduceMotion = useReducedMotion();

		const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
		
		const variantClasses = {
			primary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 focus:ring-slate-500",
			secondary: "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-slate-500",
			outline: "border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-500",
			ghost: "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-500",
		};

		const sizeClasses = {
			sm: "px-3 py-1.5 text-sm",
			md: "px-4 py-2 text-sm",
			lg: "px-6 py-3 text-base",
		};

		const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

		return (
			<motion.button
				ref={ref}
				className={classes}
				disabled={disabled || loading}
				whileHover={shouldReduceMotion || disabled || loading ? undefined : { scale: 1.02 }}
				whileTap={shouldReduceMotion || disabled || loading ? undefined : { scale: 0.98 }}
				{...props}
			>
				{loading ? (
					<span className="flex items-center gap-2">
						<svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Loading...
					</span>
				) : (
					children
				)}
			</motion.button>
		);
	}
);

Button.displayName = "Button";

export default Button;

