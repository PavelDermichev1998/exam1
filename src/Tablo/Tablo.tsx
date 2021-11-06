import React from 'react';


type propsTablo = {
    count: number
}
export function Tablo(props: propsTablo) {
    return (
        <div className={props.count === 5 ? "error" : "Tablo"}>
            {props.count < 5 ? props.count : 5}
        </div>
    );
}