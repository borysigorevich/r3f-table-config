import {
	AccumulativeShadows,
	Center,
	Environment,
	OrbitControls,
	RandomizedLight,
} from '@react-three/drei';
import React from 'react';
import { useConfiguratorContext } from '../context/ConfiguratorContextProvider.tsx';
import { Table } from './Table.tsx';

export const Experience = () => {
	const { legs } = useConfiguratorContext();

	return (
		<>
			<OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

			<group position={[0, -0.75, 0]}>
				<Center top>
					<Table />
				</Center>
				<AccumulativeShadows>
					<RandomizedLight position={[2, 5, 5]} />
				</AccumulativeShadows>
			</group>
			<Environment background preset="dawn" backgroundBlurriness={1} />
		</>
	);
};
