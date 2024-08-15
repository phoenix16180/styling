import "./App.css"

function App() {
    const paragraphElement = {
        color: 'red',
        fontSize: '18px'
    };
    const clickMeButtonElement = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px'
    }

    return (
        <fieldset>
            <h2>App</h2>
            {/* Inline Styling within the element, directly passing the properties object: */}
            <h1 style={{
                color: 'blue',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>Hello, World!</h1>

            {/* Inline Styling by with the element, passing the pre-made object. */}
            <p style={paragraphElement}>This is a sample paragraph with red text and font size of 18px.</p>
            <button style={clickMeButtonElement}>Click me</button>

            {/* External Styling, via the App.css file */}
            <div className="yellowBox">
                This is a yellow div box with a padding of 20px and margin of 20px.
            </div>
        </fieldset>
    );
}

export default App