import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class User extends Component {
    render() {
        return (
            <Link className="user-card" to={`/users/${this.props.id}/catalog`}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img src={this.props.img} />
                    <Card.Title className="bottom text-white">
                        {this.props.name}
                    </Card.Title>
                </Card>
            </Link>
        );
    }
}

export default User;
