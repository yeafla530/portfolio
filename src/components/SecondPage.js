import react from 'react';

function SecondPage() {
    return (
        <div className="container infoPage">
            <div className="info">
                <h1>INFORMATION</h1>
            </div>
            <div className="profile">
                <div className="profileImage">
                    <img src={process.env.PUBLIC_URL + 'profile.png'} alt="" />
                </div>
                <div className="profileUrl">
                    <div className="infoButton">
                        <span>yeafla530@naver.com</span>
                    </div>
                    <div className="infoButton">
                        <span>GITHUB</span>
                    </div>
                    <div className="infoButton">
                        <span>BLOG</span> 
                    </div>
                    <div className="infoButton">
                        <span>RESUME</span>
                    </div>
                </div>
            </div>
            <div className="info-text">
                <span>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요<br/>
                    안녕하세요안녕하세요안녕하세요안녕<span className="highlight">세요안녕하세요안녕하세요안녕</span>하세요안녕하세요안녕하세요안녕하세요안녕하세요
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요<br/>
                    안녕하세요안녕하세요안녕하세요안녕<span className="highlight">세요안녕하세요안녕하세요안녕</span>하세요안녕하세요안녕하세요안녕하세요안녕하세요
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                </span>
            </div>
        </div>
    )
}

export default SecondPage