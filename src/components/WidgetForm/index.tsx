import React, { useState } from 'react';
import { CloseButton } from '../CloseButton';


import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';


export const feedbackTypes = {
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
                {!typefeedback ? (
                        <FeedbackTypeStep props={setTypeFeedback} />
                ) : (
                    <span>{typefeedback}</span>
                )}



            </div>
        </>
    )
}   