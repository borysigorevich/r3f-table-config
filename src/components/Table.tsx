/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/Table.gltf 
*/

import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useConfiguratorContext } from '../context/ConfiguratorContextProvider.tsx';

export function Table(props) {
	const { nodes, materials } = useGLTF('/models/Table.gltf');

	const { legs } = useConfiguratorContext();

	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Plate.geometry} material={materials.Plate} />
			<mesh
				geometry={nodes.Legs01Left.geometry}
				material={materials.Metal}
				position={[-1.5, 0, 0]}
				castShadow
			/>

			<mesh
				geometry={nodes.Legs01Right.geometry}
				material={materials.Metal}
				position={[1.5, 0, 0]}
				castShadow
			/>

			<mesh
				geometry={nodes.Legs02Left.geometry}
				material={materials.Metal}
				position={[-1.5, 0, 0]}
				castShadow
			/>

			<mesh
				geometry={nodes.Legs02Right.geometry}
				material={materials.Metal}
				position={[1.5, 0, 0]}
				castShadow
			/>
			<mesh
				geometry={nodes.Legs03Left.geometry}
				material={materials.Metal}
				position={[-1.5, 0, 0]}
				castShadow
			/>
			<mesh
				geometry={nodes.Legs03Right.geometry}
				material={materials.Metal}
				position={[1.5, 0, 0]}
				castShadow
			/>
		</group>
	);
}

useGLTF.preload('/models/Table.gltf');
