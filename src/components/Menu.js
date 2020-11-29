import React, { Component } from "react";
import { Menu, Segment, Image } from "semantic-ui-react";
import logo from "../logo.svg";
export default class NavBar extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return ( <
            Segment inverted >
            <
            Menu inverted pointing secondary >
            <
            Menu.Item >
            <
            Image src = { logo }
            size = "tiny" / > { " " } <
            /Menu.Item>{" "} <
            p style = {
                {
                    justifyContent: "center",
                    fontSize: "3rem",
                    fontWeight: "bolder",
                    marginLeft: "25%",
                }
            } >
            { " " }
            REACT - MOVIE - APP { " " } <
            /p>{" "} <
            /Menu>{" "} <
            /Segment>
        );
    }
}