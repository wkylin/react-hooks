import React from 'react'
import WeiXin from './images/weixin.jpg'
import Search from './images/search.png'
import Logo from './images/Logo.png'
// import PromptIndex from 'components/promptComponent/PromptIndex';

function Body() {
  return (
    <section className="section">
      <div className="content">
        <div className="cards">
          <div className="card-box">
            <img src={Logo} height="100%" />
          </div>
          <div className="card-box">
            <img src={WeiXin} height="100%" />
          </div>
          <div className="card-box">
            <img src={Search} height="100%" />
          </div>
        </div>
        <div className="main">
          <div className="main-left">
            <div>hello</div>
          </div>
          <div className="main-right">
            <div className="right-box">hello</div>
            <div className="right-box">hello</div>
            <div className="right-box">hello</div>
          </div>
        </div>
      </div>

      {/* <PromptIndex /> */}
    </section>
  )
}

export default Body
