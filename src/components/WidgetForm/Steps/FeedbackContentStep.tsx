import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"
import { ArrowLeft } from "phosphor-react";

interface FeedbackContentStepProps {
    props: FeedbackType
    propsFeedbackBack: () => void //igual a function não tem parametros nem retorno 
}
export const FeedbackContentStep = ({ props, propsFeedbackBack }: FeedbackContentStepProps) => {
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



            <div className="flex py-8 gap-2 w-full">

            </div>
        </>
    )
}