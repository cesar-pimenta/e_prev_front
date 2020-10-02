import React from 'react';
import OrderComponent from './OrderComponent';
import LoginComponent from './LoginComponent';

export default class UserLists extends React.Component{
    state = { lists: [], loading: true }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = 'http://localhost:8000/orders/'
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data.results);
        this.setState({lists: data.results , loading: false});
    }

    render()
    {
        const lists = this.state.lists;
        var token = localStorage.getItem('token');
        
        if(!token)
            return <LoginComponent />
        else
        return (
            <div>
                {lists.map(list => <OrderComponent key={list.id} OrderName={list.owner} items={list.item_set}/>)}
            </div>
        )
    }
}