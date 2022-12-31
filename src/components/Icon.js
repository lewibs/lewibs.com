import React from "react";
import {VscCode} from "react-icons/vsc";
import {
    FiMonitor,
    FiMessageSquare,
    FiTerminal
} from "react-icons/fi";

const icons = {
    VscCode: <VscCode/>,
    FiMonitor: <FiMonitor/>,
    FiMessageSquare: <FiMessageSquare/>,
    FiTerminal: <FiTerminal/>
}

export function Icon({
    type,
    size=70
}) {
    return React.cloneElement(icons[type], {
        size,
    });
}