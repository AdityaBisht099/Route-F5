import { motion, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

type PageTransitionProps = PropsWithChildren<{
	/** Optional: override default variants */
	variants?: Variants;
}>;

const defaultVariants: Variants = {
	initial: { opacity: 0, y: 8, scale: 0.98 },
	enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
	exit: { opacity: 0, y: -6, scale: 0.995, transition: { duration: 0.35, ease: "easeInOut" } },
};

export function PageTransition({ children, variants = defaultVariants }: PageTransitionProps) {
	return (
		<motion.div initial="initial" animate="enter" exit="exit" variants={variants}>
			{children}
		</motion.div>
	);
}

export default PageTransition;




