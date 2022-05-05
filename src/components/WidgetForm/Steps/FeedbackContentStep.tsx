import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    props: FeedbackType
}
export const FeedbackContentStep = ({ props }: FeedbackContentStepProps) => {
    const feedbackTypeInfo = feedbackTypes[props]
    return (
        <>
            <header>
                <span className="text-xl leading-6"><img src={feedbackTypeInfo.image.source} alt="" /></span>
                <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                
            </div>
        </>
    )
}