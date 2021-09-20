import React from "react";

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={'contact'}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default Contact