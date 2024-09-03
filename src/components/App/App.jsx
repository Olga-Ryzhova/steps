import { Component } from "react";
import StepsAddForm from "../stepsAddForm/StepsAddForm";
import StepsList from "../stepsList/StepsList";

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		}
 
		this.maxId = 1;
	}

	addItem = (date, distance) => {
		const [day, month, year] = date.split('.').map(Number);
		const newDate = new Date(year, month - 1, day).getTime(); 

		this.setState(({data}) => {
			const existingItemIndex = data.findIndex(item => item.date === newDate);

			// если уже есть запись, обновляем данные
			if (existingItemIndex > -1) {
				const updatedData = [...data];

				updatedData[existingItemIndex] = {
					...updatedData[existingItemIndex],
					distance: (updatedData[existingItemIndex].distance + parseFloat(distance)).toFixed(1),
				};
				return { data: updatedData };
				
			} else {
				// если записи нет, добавляем новую
				const newItem = {
					date: newDate,
					distance: parseFloat(distance),
					id: this.maxId++
				}
				return { data: [...data, newItem] };
			}	
		})
	};

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	render() {
		const {data} = this.state;

		return(
		<div className="container">
			<StepsAddForm onAdd={this.addItem} />
			<StepsList 
				data={data} 
				onDelete={this.deleteItem}
			/>
		</div>);
	}
}

export default App;
