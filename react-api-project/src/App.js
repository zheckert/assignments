import React from "react"
import { Header, Shortener, Footer } from "./components/index"
import './index.css';

export const App = () => {
  return(
    <div>
      <div className="center">
        <Header />
      </div>
      {/* <div className="center">
      <div>
      TEST LINK
      </div>
      div>
      https://www.aliexpress.com/item/4000151357526.html?aff_platform=portals-tool&sk=_dShEGZD&aff_trace_key=125bdfedc61d458ea09ff0b304b93d49-1606344934772-02885-_dShEGZD&terminal_id=fe850e56997d42039baba5bd39d7616f&tmLog=new_Detail</div>
      </div> */}
      <div>
        <Shortener />
      </div>  
      <div className="footerSpacer">
        <Footer />
      </div>
    </div>
  )
}
