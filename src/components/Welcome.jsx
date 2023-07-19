const Welcome = (props) => {
    console.log('Hi');
    return (
        // eslint-disable-next-line react/prop-types
        <h1>Meet the <i>{props.name}</i></h1>
    );
};

export default Welcome;