import React, {useEffect, useState} from 'react';

const App = () => {
    const [value, setValue] = useState<number>(0)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])
    // Functions
    const handlerClick = () => {
        setValue(value + 1)
    }
    const handlerReset = () => {
        setValue(0)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{value}</h1>
            <div>
                <button onClick={handlerClick}>ADD</button>
                <button onClick={handlerReset}>RESET</button>
            </div>
        </div>
    );
};

export default App;