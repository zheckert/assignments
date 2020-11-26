import React from "react"
import { Shortener } from "./components/Shortener"
import './index.css';

export const App = () => {
  return(
    <div>
      <div className="center">
        <h1>URL SHORTENER</h1>
      </div>
      <div className="center">
      http://example.com/!leearn javascript$/
      https://www.aliexpress.com/item/4000151357526.html?aff_platform=portals-tool&sk=_dShEGZD&aff_trace_key=125bdfedc61d458ea09ff0b304b93d49-1606344934772-02885-_dShEGZD&terminal_id=fe850e56997d42039baba5bd39d7616f&tmLog=new_Detail
      </div>
      <div className="center">
        <Shortener />
      </div>  
    </div>
  )
}
