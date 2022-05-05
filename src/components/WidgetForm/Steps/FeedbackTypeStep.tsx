import React, { useState } from 'react';
import { feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface TypesFeedbackProps {
    props: (type: string) => void;
}

export const FeedbackTypeStep = (props: TypesFeedbackProps) => {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={value.title}
                            className="bg-zinc-800 rounder-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent  hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => props.props(value.title)}
                            type="button"

                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}