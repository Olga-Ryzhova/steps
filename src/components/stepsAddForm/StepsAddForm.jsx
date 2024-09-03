import { Component } from 'react';
import './StepsAddForm.css';

class StepsAddForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			date: '',
			distance: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.date || !this.state.distance) return;
		
		this.props.onAdd(this.state.date, this.state.distance);
		
		this.setState({
			date: '',
			distance: ''
		})
	}

	render() {
		const {date, distance} = this.state;
		return (
			<div className="app-add-form">
				<div className="title">Учет тренировок</div>

				<form	className="add-form" onSubmit={this.onSubmit}> 
					<div className="info-steps">
						<div className="sub-title">Дата (ДД.ММ.ГГ)</div> 
						<input type="text" 
							className="form-control"
							name="date"
							value={date}
							onChange={this.onValueChange}/>
					</div>

					<div className="info-steps"> 
					<div className="sub-title">Пройдено км</div> 
						<input type="text" 
							className="form-control"
							name="distance"
							value={distance}
							onChange={this.onValueChange}   
							/>
					</div>

					<button type="submit"
						className="btn">ОК</button>
				</form>
			</div>
    )
	}
}

export default StepsAddForm