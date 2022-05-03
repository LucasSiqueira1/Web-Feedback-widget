import React, { useState } from 'react';
import { CloseButton } from '../CloseButton';


import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'


const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lampada',
        },
    },
    ORDER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de uma nuvem',
        },
    },
}

export const WidgetForm = () => {
    const [typefeedback, setTypeFeedback] = useState('')
    

    return (
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                <header>
                    <span className="text-xl leading-6">Deixe seu feedback</span>
                    <CloseButton />
                </header>

                {!typefeedback ? (
                    <div className="flex py-8 gap-2 w-full">
                    {Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={value.title}
                                className="bg-zinc-800 rounder-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent  hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => setTypeFeedback(value.title)}
                                type="button"

                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })}
                    
                </div>
                ): (
                    <span>{typefeedback}</span>
                )}
                


            </div>
        </>
    )
}   