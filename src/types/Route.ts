import { ComponentType, FC } from 'react';

export type Route = {
	key: string;
	title: string;
	description?: string;
	path?: string;
	component?: FC<{}>;
	isEnabled: boolean;
	icon?: ComponentType;
	subRoutes?: Route[];
};
