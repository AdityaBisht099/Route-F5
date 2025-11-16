"use client";

import { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900 p-4">
					<div className="max-w-md w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 shadow-sm">
						<div className="flex items-center gap-3 mb-4">
							<AlertCircle className="h-5 w-5 text-red-500" />
							<h2 className="text-lg font-semibold text-slate-900 dark:text-white">Something went wrong</h2>
						</div>
						<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
							We encountered an unexpected error. Please try refreshing the page.
						</p>
						{this.state.error && (
							<details className="mb-4">
								<summary className="text-xs text-slate-500 dark:text-slate-500 cursor-pointer mb-2">
									Error details
								</summary>
								<pre className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-2 rounded overflow-auto">
									{this.state.error.message}
								</pre>
							</details>
						)}
						<button
							onClick={() => window.location.reload()}
							className="w-full rounded-md bg-slate-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
						>
							Refresh Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

