import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import {
    Layout,
    Input,
    Row,
    Col,
    Card,
    Tag,
    Spin,
    Alert,
    Modal,
    Typography,
    Table,
} from "antd";
import "antd/dist/antd.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/Menu";
import Detail from "./components/Detail";
import { SearchOutlined } from "@ant-design/icons";

function App() {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("naruto");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const suffix = ( <
        SearchOutlined style = {
            {
                fontSize: 40,
                color: "#1890ff",
            }
        }
        />
    );

    const columns = [{
            title: "TITLE",
            dataIndex: "Title",
            width: 150,
            render: (text) => < h3 style = {
                { color: "black" }
            } > { text } < /h3>,
        },

        {
            title: "TYPE",
            dataIndex: "Type",
            width: 150,
            render: (text) => < h3 style = {
                { color: "black" }
            } > { text } < /h3>,
        },

        {
            title: "DETAILS",
            dataIndex: "imdbID",
            width: 150,
            render: (data) => < Detail id = { data }
            />,
        },
    ];

    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?s=${search}&apikey=8ed06ec6`)
            .then(async function(response) {
                console.log(response.data.Search);
                await setMovie(response.data.Search);
            });
    });

    return ( <
        >
        <
        div className = "App" >
        <
        div > { " " } <
        NavBar / > { " " } <
        /div>{" "} <
        div > { " " } <
        Input placeholder = "input search text"
        allowClear enterButton = "Search"
        size = "medium"
        suffix = { suffix }
        onChange = { handleChange }
        />{" "} < /
        div > { " " } <
        div style = {
            { fontFamily: "sans-serif", fontWeight: "bolder" }
        } >
        <
        Table style = {
            { backgroundColor: "black" }
        }
        boardered size = "medium"
        columns = { columns }
        dataSource = { movie }
        pagination = {
            { pageSize: 8, position: ["bottomCenter"] }
        }
        scroll = {
            { y: 380 }
        }
        />{" "} < /
        div > { " " } <
        /div>{" "} < / >
    );
}

export default App;