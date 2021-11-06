import React, {Dispatch, SetStateAction} from 'react';


type propsButtons = {
    setCount: Dispatch<SetStateAction<number>>
    count: number
}

export function Buttons(props: propsButtons) {

    const countPlus = () => {
        props.setCount(props.count + 1)
    }
    const countReset = () => {
        props.setCount(0)
    }

    return (
        <div className="Buttons">
            <button
                disabled={props.count >= 5}
                className="inc"
                onClick={countPlus}>
                inc
            </button>
            <button
                disabled={props.count === 0}
                className="reset"
                onClick={countReset}>
                reset
            </button>
        </div>
    );
}