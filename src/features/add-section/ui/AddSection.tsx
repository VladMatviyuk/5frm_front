import { Atom } from '@/shared/ui';
import { useEffect, useState, type FC } from 'react';
import { FormAddSection } from './FormAddSection';
import { type Section as ISection } from '@/entities/sections/model/types';
interface Props {
	readonly editMode: ISection | undefined;
	readonly onAddSections: () => void;
}

export const AddSection: FC<Props> = ({ onAddSections, editMode }) => {
	const [showForm, setShowForm] = useState<boolean>(false);

	const afterAddSections = () => {
		onAddSections();
		setShowForm(false);
	};

	useEffect(() => {
		if (!editMode) return;
		setShowForm(true);
	}, [editMode]);

	return (
		<>
			<div onClick={() => setShowForm(true)}>
				<Atom outlined>Добавить раздел</Atom>
			</div>
			{showForm && (
				<FormAddSection
					onAddSections={afterAddSections}
					editMode={editMode}
					close={() => setShowForm(false)}
				/>
			)}
		</>
	);
};
