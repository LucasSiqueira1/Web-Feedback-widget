import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"
import { ArrowLeft, Camera } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { useState } from "react";

interface FeedbackContentStepProps {
    props: FeedbackType
    propsFeedbackBack: () => void //igual a function não tem parametros nem retorno 
}
export const FeedbackContentStep = ({ props, propsFeedbackBack }: FeedbackContentStepProps) => {
    const [screenshot, setScreenshot] = useState<string | null>(null)

    const feedbackTypeInfo = feedbackTypes[props]
    return (
        <>

            <header>
                <button onClick={propsFeedbackBack} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-5 h-5" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt="Feedback type image" className="w-6 h-6" />
                    {feedbackTypeInfo.title}

                </span>
                <CloseButton />
            </header>



            <form action="" className="my-4 h-full">
                <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
                    placeholder="Conte com detalhes o que está acontecendo..." />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton props = {setScreenshot} screenshot ={screenshot}/>
                    
                    <button type="submit" className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}