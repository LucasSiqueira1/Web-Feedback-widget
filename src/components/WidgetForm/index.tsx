import React, { useState } from 'react';
import { CloseButton } from '../CloseButton';


import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';


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

// keyof -> chave de
export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false)

    const handleReturnFeedback = () => {
        setFeedbackSend(false)
        setFeedbackType(null)
    }
    
    return (
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                {feedbackSend ? (
                    <FeedbackSucessStep props={handleReturnFeedback} />
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep props={setFeedbackType} />
                            // passando o state setFeedbackTypes dessa função para outra
                        ) : (
                            <>
                                <FeedbackContentStep props={feedbackType} propsFeedbackBack={handleReturnFeedback} propsFeedbackSend={() => setFeedbackSend(true)} />
                                <CloseButton />
                            </>
                        )}
                    </>
                )}
                <footer>Todos os direito reservados</footer>
            </div>

        </>
    )
}   