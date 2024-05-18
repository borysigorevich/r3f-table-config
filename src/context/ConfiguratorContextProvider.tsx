import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

const ConfiguratorContext = createContext({
	legs: 0,
	setLegs: (legs: number) => {},
	legsColor: '#777',
	setLegsColor: (color: string) => {},
	tableWidth: 100,
	setTableWidth: (width: number) => {},
});

export const ConfiguratorContextProvider = ({ children }: PropsWithChildren) => {
	const [legs, setLegs] = useState(0);
	const [legsColor, setLegsColor] = useState('#777');
	const [tableWidth, setTableWidth] = useState(100);

	return (
		<ConfiguratorContext.Provider
			value={{
				legs,
				setLegs,
				legsColor,
				setLegsColor,
				tableWidth,
				setTableWidth,
			}}
		>
			{children}
		</ConfiguratorContext.Provider>
	);
};

export const useConfiguratorContext = () => {
	return useContext(ConfiguratorContext);
};
