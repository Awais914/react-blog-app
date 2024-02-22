import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

export const getAppTheme = (): Theme => {
	let theme = createTheme({
		typography: {
			allVariants: {
				fontFamily: 'Poppins'
			}
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
