import React, { useState } from 'react';
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react';

export const Widget = () => {
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    // const visibleWidget = () => {
    //     setIsWidgetOpen(!isWidgetOpen);
    // }
    return (
        <>
            <Popover className="absolute bottom-5 right-5 ">
                <Popover.Panel>Hello world</Popover.Panel>

                <Popover.Button  className="bg-brand-500 text-white rounded-full px-3 h-12 flex items-center group">
                    <ChatTeardropDots className="w-6 h-6 " />

                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                        <span className="pl-2"> </span>
                        Feedback
                    </span>
                </Popover.Button>
            </Popover>
        </>
    )
}