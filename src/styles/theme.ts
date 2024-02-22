import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

export const getAppTheme = (): Theme => {
	let theme = createTheme({
		typography: {
			allVariants: {
				fontFamily: 'Poppins',
				fontSize: '15px'
			},
			h2: {
				color: '#111111',
			},
			body1: {
				color: '#666666',
			}
		},
		palette: {
      primary: {
        main: '#111111',
      	light: '#222222',
      },
      secondary: {
        main: '#666666',
      	light: '#595858',
      },
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'& .MuiOutlinedInput-root': {
							borderWidth: 1,
							borderRadius: 20,
						},
					}
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 20,
					},
				}, 
			},
		}
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
