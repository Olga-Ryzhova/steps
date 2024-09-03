import './StepsListItem.css';

import pencil from '../../img/pencil.png';
import deleteIcon from '../../img/delete.png';

const StepsListItem = (props) => {
	const {date, distance, onDelete} = props;

	const formattedDate = new Date(date).toLocaleDateString('ru-RU');

	return (
		<li className="list-group-item">
			<div className="list-group-date">{formattedDate}</div>  
			<div className="list-group-distance">{distance}</div> 
			<div className="list-group-buttons">
				<button type="button" className="btn-pencil" >
					<img className="icon" src={pencil} alt="pencil" />
				</button>
				<button type="button"	className="btn-delete" onClick={onDelete}>
					<img className="icon" src={deleteIcon} alt="delete" />
				</button>
			</div>
		</li>
	)
}

export default StepsListItem;