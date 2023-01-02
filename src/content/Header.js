import React, { useState } from "react";
import { Button } from "../components/Button";
import { StickyHeader } from "../components/StickyHeader";
import { injectStyle } from "../functions/injectStyle";
import { noPhone } from "../style/hideable";

const NoPhoneButton = injectStyle(Button, noPhone);

export function Header({refs}) {
    const [sections] = useState(Object.keys(refs));

    return (
        <StickyHeader>
            {sections.map((key, i)=>{
                let Butt;
                if (i === 0) {
                    Butt = Button;
                } else {
                    Butt = NoPhoneButton;
                }
                return(
                    <Butt
                        key={key}
                        onClick={()=>{
                            refs[key].current.scrollIntoView();
                        }}
                    >
                        {key}
                    </Butt>
                );
            })}
        </StickyHeader>
    );
}