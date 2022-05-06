import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import { Loading } from '../Loading/Loading';

interface ScreenshotButtonProps {
    screenshot: string | null;
    props: (screenshot: string | null) => void;
}


export const ScreenshotButton = ({screenshot, props}: ScreenshotButtonProps) => {
    const [isScreenshot, setIsScreenshot] = useState(false)

    const handleScreenshot = async () => {
        setIsScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const dataURL = canvas.toDataURL('image/png')
        
        // console.log(dataURL)
        props(dataURL)
        setIsScreenshot(false)
    }


    if (screenshot) {
        return(
            <button type="button" onClick={() => props(null)} className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors" style={{backgroundImage: `url(${screenshot})`, backgroundPosition:'right bottom', backgroundSize: 180,}}>
                <Trash weight="fill"/>
            </button>
        )
    }
    return (
        <>
            <button onClick={() => handleScreenshot()} type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 ">

                {isScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
            </button>
        </>
    )
}