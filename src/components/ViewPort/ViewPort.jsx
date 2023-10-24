import React, {useEffect, useState} from "react";

export const ViewPort = ()=>{
    const[height, setHeight] = useState(0)
    const[width, setWidth] = useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove', resizeHandler)

        return ()=>{
            console.log('');
            window.removeEventListener('mousemove', resizeHandler)
            
        }
    })

    function resizeHandler(e){
        setHeight(e.clientX)
        setWidth(e.clientY)
    }

    return (
        <div>
            {width}x{height}
        </div>
    )
}