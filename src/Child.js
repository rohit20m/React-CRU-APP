import React from 'react'

function Child(props) {
    return (
        <>
            <div>
                <p>data:{props.dataFromParent}</p>
                <button onClick={props.data}>click</button>
            </div>
        </>
    )
}

export default Child
