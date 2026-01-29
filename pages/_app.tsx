import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/globals.css";
 
export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<ErrorBoundary>
			<SessionProvider session={(pageProps as any).session}>
				<AnimatePresence mode="wait" initial={false}>
					{/* Key the component on route so exit/enter animations fire */}
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</SessionProvider>
		</ErrorBoundary>
	);
}


