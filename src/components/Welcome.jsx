const Welcome = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <h1>Meet the <i>{props.name}</i></h1>
    );
};

export default Welcome;