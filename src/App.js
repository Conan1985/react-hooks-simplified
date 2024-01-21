import {useEffect, useRef, useState} from "react";

function App() {
    const [name, setName] = useState('')
    // const renderCount = useRef(0)
    const prevName = useRef('')
    const inputRef = useRef()

    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1
    // });

    function focus() {
        inputRef.current.focus()
        inputRef.current.value = 'focus button'
    }

    useEffect(() => {
        prevName.current = name
    }, [name]);

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current}</div>
            {/*<div>I rendered {renderedderCount.current} time</div>*/}
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default App