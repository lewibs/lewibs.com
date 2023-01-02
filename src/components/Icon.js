import React from "react";
import {VscCode} from "react-icons/vsc";
import {
    FiMonitor,
    FiMessageSquare,
    FiTerminal,
    FiAtSign,
    FiPhone,
    FiMail,
} from "react-icons/fi";

import {
    AiOutlinePhone
} from "react-icons/ai";

import { 
    BsInstagram,
    BsLinkedin,
    BsGithub,
    BsSpotify,
    BsFillTelephoneFill,
 } from "react-icons/bs";

const icons = {
    VscCode: <VscCode/>,
    FiMonitor: <FiMonitor/>,
    FiMessageSquare: <FiMessageSquare/>,
    FiTerminal: <FiTerminal/>,
    FiAtSign: <FiAtSign/>,
    BsInstagram: <BsInstagram/>,
    BsLinkedin: <BsLinkedin/>,
    BsGithub: <BsGithub/>,
    BsSpotify: <BsSpotify/>,
    BsFillTelephoneFill: <BsFillTelephoneFill/>,
    FiPhone: <FiPhone/>,
    AiOutlinePhone: <AiOutlinePhone/>,
    FiMail: <FiMail/>
}

export function Icon({
    type,
    size=70,
    onClick
}) {
    return React.cloneElement(icons[type], {
        size,
        onClick,
    });
}