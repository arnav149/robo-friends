import React from 'react';
import Card from './Card';


const CardList = ({robo})=>
{
	const CardArray = robo.map((user,i)=>{
	return <Card key= {i} id={robo[i].id} name={robo[i].name} email={robo[i].email} />
    })
		
	return(
		<div>
		{CardArray}
		</div>
		);
}

export default CardList;