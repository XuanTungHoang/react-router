import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Products extends Component {

    render() {
        var products = [
            {
                id: 1,
                slug: 'Iphone',
                name: 'Iphone X',
                price: '10000000'
            },
            {
                id: 2,
                name: 'Oppo F7',
                slug: 'Oppo',
                price: '12000000'
            },
            {
                id: 3,
                name: 'Samsung S8',
                slug: 'Samsung',
                price: '7000000'
            }

        ]
        var { match, location } = this.props;
        var url = match.url;
        //console.log(location);
        var result = products.map((item, index) =>{
            return (
                <NavLink to={`${url}/${item.slug}`} key={index}>
                    <li className="list-group-item" >
                        {item.id} - {item.name} - {item.price}
                    </li>
                </NavLink>
            )
        })
       
        return (
            <div className="container">
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;