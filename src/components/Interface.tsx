import React, { useId } from 'react';
import { useConfiguratorContext } from '../context/ConfiguratorContextProvider.tsx';
import { RadioGroup, RadioGroupItem } from './ui/radio-group.tsx';
import { Slider } from './ui/slider.tsx';

export const Interface = () => {
	const sliderId = useId();
	const legsId = useId();
	const legsColorId = useId();

	const { setLegs, legs, legsColor, setLegsColor, setTableWidth, tableWidth } =
		useConfiguratorContext();

	return (
		<div className={'fixed top-10 right-10 grid gap-8 min-w-52'}>
			<div className="bg-[rgb(255_255_255/20%)] rounded-lg shadow p-4 backdrop-blur">
				<label htmlFor={sliderId} className={'text-base font-semibold'}>
					Table Width
				</label>
				<Slider
					id={sliderId}
					className={'mt-4'}
					value={[tableWidth]}
					onValueChange={(value) => {
						setTableWidth(value[0]);
					}}
				/>
			</div>

			<div className="bg-[rgb(255_255_255/20%)] rounded-lg shadow p-4 backdrop-blur">
				<label htmlFor={legsId} className={'text-base font-semibold'}>
					Legs Layout
				</label>
				<RadioGroup
					id={legsId}
					className="mt-4"
					value={String(legs)}
					onValueChange={(value) => {
						setLegs(Number(value));
					}}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'0'} id="Standard" />
						<label htmlFor="Standard">Standard</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'1'} id="Solid" />
						<label htmlFor="Solid">Solid</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'2'} id="Design" />
						<label htmlFor="Design">Design</label>
					</div>
				</RadioGroup>
			</div>

			<div className="bg-[rgb(255_255_255/20%)] rounded-lg shadow p-4 backdrop-blur">
				<label htmlFor={legsColorId} className={'text-base font-semibold'}>
					Legs Color
				</label>
				<RadioGroup
					id={legsColorId}
					className="mt-4"
					value={legsColor}
					onValueChange={setLegsColor}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'#777'} id="Black" />
						<label htmlFor="Black">Black</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'#ececec'} id="Chrome" />
						<label htmlFor="Chrome">Chrome</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'#c9bd71'} id="Gold" />
						<label htmlFor="Gold">Gold</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={'#f7c5ad'} id="Pink Gold" />
						<label htmlFor="Pink Gold">Pink Gold</label>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
};
