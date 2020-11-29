import React, { useState, useEffect } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import axios from "axios";

function Detail(props) {
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?i=${props.id}&apikey=8ed06ec6`)
            .then(async function(response) {
                console.log(response.data);
                await setMovie(response.data);
            });
    });

    return ( <
        Modal onClose = {
            () => setOpen(false) }
        onOpen = {
            () => setOpen(true) }
        open = { open }
        trigger = { < Button primary > More Info < /Button>} >
            { " " } <
            Modal.Header style = {
                { color: "#1890ff" } } > { " " } { movie.Title } { " " } <
            /Modal.Header>{" "} <
            Modal.Content image >
            <
            Image size = "medium"
            src = { movie.Poster }
            wrapped / >
            <
            Modal.Description >
            <
            Header > { movie.Title } < /Header>{" "} <
            ul >
            <
            li > { " " } <
            strong > Genre: < /strong> {movie.Genre}{" "} <
                /li>{" "} <
                li >
                <
                strong > Plot: < /strong> {movie.Plot}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Actors: < /strong> {movie.Actors}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Year: < /strong> {movie.Year}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Released: < /strong> {movie.Released}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Writer: < /strong> {movie.Writer}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Language: < /strong> {movie.Language}{" "} <
                /li>{" "} <
                li > { " " } <
                strong > Country: < /strong> {movie.Country}{" "} <
                /li>{" "} <
                /ul>{" "} <
                /Modal.Description>{" "} <
                /Modal.Content>{" "} <
                Modal.Actions >
                <
                Button color = "black"
            onClick = {
                () => setOpen(false) } >
            BACK { " " } <
            /Button> <
            /Modal.Actions>{" "} <
            /Modal>
        );
    }

    export default Detail;