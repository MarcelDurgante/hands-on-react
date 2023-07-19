const Welcome = (props) => {
    console.log(props);
    return (
        <h1>Meet the <i>{props.name}</i></h1>
    );
};

export default Welcome;