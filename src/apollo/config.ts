import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getSession, deleteSession } from '../utils/session';

const httpLink = new HttpLink({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = getSession('token');
	const authorization = token ? `Bearer ${token}` : '';
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: authorization,
		},
	}));
  
	return forward(operation);
});

const errorLink = onError(({ operation, graphQLErrors, networkError, response }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(err => {
			if (err.extensions.code === 'UNAUTHENTICATED' || err.extensions.code === 'FORBIDDEN') {
				deleteSession();
				window.location.href = '/';
			}

			// if (err.extensions.code === 'INTERNAL_SERVER_ERROR') {
			// 	err.message = 'An error has occurred';
			// }
		});
	}

	if (networkError && networkError.message === 'invalid_token') {
		deleteSession();
		window.location.href = '/';
	}
});

const link = ApolloLink.from([authMiddleware, errorLink, httpLink]);


const apolloClient = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

export default apolloClient;
