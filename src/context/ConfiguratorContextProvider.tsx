import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

const ConfiguratorContext = createContext({
	legs: 0,
	setLegs: (legs: number) => {},
});

export const ConfiguratorContextProvider = ({ children }: PropsWithChildren) => {
	const [legs, setLegs] = useState(0);

	return (
		<ConfiguratorContext.Provider
			value={{
				legs,
				setLegs,
			}}
		>
			{children}
		</ConfiguratorContext.Provider>
	);
};

export const useConfiguratorContext = () => {
	return useContext(ConfiguratorContext);
};
