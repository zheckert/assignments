import React from "react"

import {ThemeContextConsumer} from "./ThemeContext"

export const Main = (props) => {
    return(
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                <div className="flex">
                    <h1>
                        Theme Changing Website
                    </h1>
                </div>
                <div className="flex">
                    <img src="https://64.media.tumblr.com/1df2407265dc586e705a68859fa94149/tumblr_mycvx3wrSp1qai03no1_500.jpg" alt="Teacher from A Christmas Story"/>
                </div>
                <div className="flex">
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Change theme</button>
                </div>
            </div>
            )}
        </ThemeContextConsumer>   
    )
}