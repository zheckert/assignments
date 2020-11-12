import React, { useContext } from "react"

import {ThemeContext} from "./ThemeContext"

export const Main = (props) => {
    const context = useContext(ThemeContext)
    
    return(
                <div className={`${context.theme}-theme`}>
                    <div className="flex">
                        <h1>
                            Theme Changing Website
                        </h1>
                    </div>
                    <div className="flex">
                        <div>
                            <img src="https://64.media.tumblr.com/1df2407265dc586e705a68859fa94149/tumblr_mycvx3wrSp1qai03no1_500.jpg" alt="Teacher from A Christmas Story"/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="button">
                            <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Change theme</button>
                        </div>
                    </div>
                        
                   
                    
            </div>
    )
}