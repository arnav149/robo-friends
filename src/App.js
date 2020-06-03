import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component
{
	constructor()
	{
		super();
		this.state =
		{
			robo : [],
			searchfield:''
		}
	}

	onSearchChange = (event) => this.setState({searchfield: event.target.value});

	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robo: users})});
  }

	render()
	{
	const filteredArray = this.state.robo.filter(robo =>
		{
			return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
			
	return(
		<div className = 'tc'>
		<h1 className='f1'>Robo Friends</h1>
		<SearchBox searchChange = {this.onSearchChange} />
		<Scroll>
		<CardList robo ={filteredArray}/>
		</Scroll>
		</div>
		);
    }
}

export default App;