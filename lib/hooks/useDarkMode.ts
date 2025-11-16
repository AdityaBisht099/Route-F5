import { useEffect, useState } from "react";

export function useDarkMode() {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// Check localStorage first, then system preference
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const shouldBeDark = stored === "dark" || (!stored && prefersDark);
		
		setIsDark(shouldBeDark);
		if (shouldBeDark) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleDark = () => {
		const next = !isDark;
		setIsDark(next);
		const root = document.documentElement;
		
		if (next) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return { isDark, toggleDark, mounted };
}

