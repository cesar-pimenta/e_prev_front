import React from 'react';
import ProductComponent from './ProductComponent';


export default class ProductLists extends React.Component{
    state = { lists: [], loading: true}
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
        
        // var url = 'http://54.172.198.86:8080/orders/';
        var url = 'http://127.0.0.1:8000/products/'
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data.results);
        this.setState({lists: data.results , loading: false});
    }

    render(){
        const lists = this.state.lists;
        return (
            <section id="popular-product" class="ecommerce">
                <div class="container">
                    <div class="mt-5">
                        <div class="block-heading-two">
                        </div>
                        <div class="row">
                        {/* {lists.map(list => <ProductComponent key={list.id} ProductName={list.name}/>)} */}
                        {lists.map(product => <ProductComponent name={product.name} image={product.image} desc={product.description} />)}
                        </div>
                        <div class="shopping-pagination pull-right">
				<ul class="pagination">
				</ul>
			</div>
                    </div>
                </div>
            </section>
        )
    }
}