import React from 'react';
import {a, useTrail} from "@react-spring/web";

interface Props {
    children: React.ReactNode
}

export const Trail: React.FC<Props> = ({children}) => {
    const childItems = React.Children.toArray(children)
    const trail = useTrail(childItems.length, {
        from: {opacity: 0, y: 20},
        to: {opacity: 1, y: 0},
        delay: 100,
        config: {mass: 10, tension: 2000, friction: 100}
    })

    return (
        <ul className={"w-full max-w-md grid grid-cols-1 gap-4"}>
            {trail.map(({...style}, index) => (
                <a.li key={index} style={style}>
                    {childItems[index]}
                </a.li>
            ))}
        </ul>
    )
}