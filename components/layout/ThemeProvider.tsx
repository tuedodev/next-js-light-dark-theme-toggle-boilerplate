'use client';

import { clientUpdatesSessionToken, updateSessionToken } from '@/lib/session';
import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeProvider, ThemeContextType } from '@/lib/types';

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ThemeProvider> = ({ children, initialTheme }) => {
	const [theme, setTheme] = useState<Theme>(initialTheme === 'light' ? 'light' : 'dark');

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		/* Server Actions can be called from useEffect */
		clientUpdatesSessionToken({ theme: theme });
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme hook has to be used within a ThemeProvider');
	return context;
}

export default ThemeProvider;
