import './StepsList.css';
import StepsListItem from '../StepsListItem/StepsListItem';


const StepsList = ({data, onDelete}) => {
	const sortedData = [...data].sort((a, b) => b.date - a.date);

	const elements = sortedData.map(item=> {
		const {id, ...itemProps} = item;

		return (
			<StepsListItem
				key={id} {...itemProps}
				onDelete={() => onDelete(id)}
			/>
		)
	});
	
	return (
		<>
			<div className="header">
				<div className="sub-title">Дата (ДД.ММ.ГГ)</div> 
				<div className="sub-title">Пройдено км</div> 
				<div className="sub-title">Действия</div> 
			</div>

			<ul className="app-list">
				{elements}
			</ul>
		</>
	)
}

export default StepsList;
