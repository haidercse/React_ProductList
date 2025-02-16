import React,{ Component  } from "react";
import "../../assets/Card.css";

class Card2 extends Component {
    render(){
        return (
            <div className="card">
              <img src={this.props.image} alt={this.props.title} className="card-image" />
              <h3 className="card-title">{this.props.title}</h3>
              <p className="card-description">{this.props.description}</p>
              <p className="card-price">${this.props.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          );
    }
}

export default Card2;