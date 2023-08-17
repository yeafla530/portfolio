import {useEffect} from 'react';
import "../assets/first.css"

function FirstPage() {
    return (
        <div className="container center">
            <div class="mainText">
                <h1>LEE YERIM</h1>
            </div>
            <div class="mainText">
                <h1>FRONTEND</h1>
            </div>
            <div class="mainText">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="down-box">
                <img src={process.env.PUBLIC_URL + 'white-arrow.png'} alt="" />
            </div>
        </div>
    )
}

export default FirstPage