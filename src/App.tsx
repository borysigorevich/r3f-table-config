import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Experience } from './components/Experience.tsx';
import { Interface } from './components/Interface.tsx';
import { ConfiguratorContextProvider } from './context/ConfiguratorContextProvider.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<ConfiguratorContextProvider>
				{/*<Canvas shadows camera={{ position: [4, 6, 6], fov: 35 }}>*/}
				<Canvas
					shadows
					gl={{ antialias: false }}
					dpr={[1, 1.5]}
					camera={{ position: [4, -1, 8], fov: 35 }}
				>
					<Experience />
				</Canvas>
				<Interface />
			</ConfiguratorContextProvider>
		</div>
	);
}

export default App;
