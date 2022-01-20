import React, { Component } from 'react';

class CardResto extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            restaurants: [],
        };
    }
    // new
    componentDidMount() {
        fetch("http://127.0.0.1:8000/restaurants/?format=json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    restaurants: json,
                });
            })
    }
    render() {
        return (
            <div>
                {this.state.restaurants.map(item => (
                    <div key={item.name}>
                        <h1>{item.address}</h1>
                        <span>{item.city}</span>
                    </div>
                ))}
            </div>
        );
    }
}
export default CardResto;