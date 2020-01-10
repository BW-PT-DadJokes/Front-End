function DeleteJoke(props) {
    //
    const joke = props.jokes.find(
        thing => `${thing.id}` === props.match.params.id
    );

    if (!props.jokes.length || !joke) {
        return <h2>Loading item data...</h2>;
    }

    const handleEditClick = e => {
        e.preventDefault();
        props.history.push(`/update_item/${joke.id}`);
    };

    const deleteJoke = e => {
        e.preventDefault();
        axios
            .delete(`http://localhost:3333/items/${joke.id}`)
            .then(res => {
                props.updateItems(res.data);
                props.history.push('/');
            })
            .catch(err => console.log(err));
    };
}
export default DeleteJoke;