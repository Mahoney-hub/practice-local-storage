import React, {useState} from 'react';

const App = () => {
    const [value, setValue] = useState<number>(0)
    // Functions
    const handlerClick = () => {
        setValue(value + 1)
    }
    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }
    const getFromToLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const resetClick = () => {
        localStorage.clear()
        setValue(0)
    }
    const handlerClickRemove = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{value}</h1>
            <div>
                <button onClick={handlerClick}>ADD</button>
                <button onClick={resetClick}>RESET</button>
                <button onClick={setToLocalStorage}>setToLocalStorage</button>
                <button onClick={getFromToLocalStorage}>getFromToLocalStorage</button>
                <button onClick={handlerClickRemove}>REMOVE</button>
            </div>
        </div>
    );
};

export default App;