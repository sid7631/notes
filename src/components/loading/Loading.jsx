import React from 'react'
import "./Loading.scss"

const Loading = (props) => {
    
    return (
            <div className="loading-container">
                <div>{props.message}</div>
                <div className="loading-line">
                    <div className="inner"></div>
                </div>
            </div>

    )
}

export default Loading
