import React, {FC} from "react";

type PropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<PropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={'contact'}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default Contact