import { useContext } from 'react';
const Helmet = require('react-helmet');
import { APP_TITLE } from 'utils/constants';


export const Home = () => {
	return (
		<>
			<Helmet>
				<title>
					{APP_TITLE}
				</title>
			</Helmet>
			<h1>ABDEF</h1>
		</>
	);
};
