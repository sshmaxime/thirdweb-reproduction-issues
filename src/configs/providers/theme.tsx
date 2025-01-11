"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider as ThemeProviderPrimitive } from "next-themes";

/**
 * Theme provider.
 */
const ThemeProvider = ({ children }: PropsWithChildren) => (
	<ThemeProviderPrimitive
		attribute="class"
		defaultTheme="dark"
		forcedTheme="dark"
		enableSystem
		disableTransitionOnChange
	>
		{children}
	</ThemeProviderPrimitive>
);

export { ThemeProvider };
