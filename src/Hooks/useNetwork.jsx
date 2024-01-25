import React,{ useEffect, useState } from "react"

export default function useNetwork(){
    let [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        detectIsOnline()
    },[])
    function detectIsOnline(){
        window.addEventListener('online', ()=>{
            setIsOnline(true)
        })

        window.addEventListener('offline', ()=>{
            setIsOnline(false)
        })
    }
   
    return <>
        {!isOnline? <div>You Are Offline</div>:''}
    </>
}