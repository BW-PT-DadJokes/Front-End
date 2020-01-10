import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialJoke = {
    question: '',
    punchline: ''
};

const EditForm = props => {
    const [joke, setJoke] = useState(initialJoke);
    useEffect(() => {
        const jokeToEdit = props.items.find(
            e => `${e.id}` === props.match.params.id
        );
        console.log(props.items, itemToEdit);
        if (jokeToEdit) {
            setJoke(jokeToEdit);
        }
    }, [props.jokes, props.match.params.id]);

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'price') {
            value = parseInt(value, 10);
        }

        setJoke({
            ...joke,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // make a PUT request to edit the item
        axios
            .put(`/joke/${joke.id}`, joke)
            .then(res => {
                props.updateJokes(res.data);
                props.history.push(`/${joke.id}`);
            })
            .catch(err => console.log(err));
    };

};

export default EditForm;