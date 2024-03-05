export type Theme = 'light' | 'dark';

export type ThemeProvider = {
	children: React.ReactNode;
	initialTheme: string;
};

export type ThemeContextType = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
export type SessionType = {
	theme?: Theme;
	username?: string;
	email?: string;
	cookieConsentDialogSent?: boolean;
};
