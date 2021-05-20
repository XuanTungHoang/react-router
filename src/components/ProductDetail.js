import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        var {match} = this.props;
        var slug = match.params.slug;
        //console.log(match);
        return (
            <h1>Bạn vừa chọn vào <i>{slug}</i></h1>
        );
    }
}

export default ProductDetail;