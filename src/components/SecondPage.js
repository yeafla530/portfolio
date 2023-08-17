import react from 'react';
import '../assets/second.css'

function SecondPage() {
    const moveUrl = (url) => {
        window.open(url, "_blank", "noreferrer")
    }
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
                    <div className="infoButton" onClick={()=>moveUrl("https://github.com/yeafla530")}>
                        <span>GITHUB</span>
                    </div>
                    <div className="infoButton" onClick={()=>moveUrl("https://ssafy-story.tistory.com/")}>
                        <span>BLOG</span> 
                    </div>
                    <div className="infoButton" onClick={()=>moveUrl("https://github.com/yeafla530/react-portfolio")}>
                        <span>RESUME</span>
                    </div>
                </div>
            </div>
            <div className="info-text">
                <span>
                    저는 <span className="highlight">진취적으로 성장</span>하기 위해 노력하는 프론트엔드 개발자 이예림입니다.<br/>
                    제가 생각하는 프론트엔드 개발자는  <span className="highlight">기술을 통해 고객과 사용자들이 더 쉽고 편안한 서비스를 이용하면서 빠르게 원하는 바를 이룰 수 있도록 만드는 직업</span>이라 생각합니다. 
                    저의 기술을 통해 화면을 개발하여 <span className="highlight">시각적으로 보여주는 프론트엔드 개발</span>의 매력에 빠져 프론트엔드 개발자가 되기 위해 꾸준히 노력했습니다.
                    삼성청년SW아카데미에 참여해 <span className="highlight">3번의 팀프로젝트에서 모두 프론트엔드 개발</span>을 맡으며 개발 역량을 쌓아왔습니다.
                    이후 <span className="highlight">1년간 프론트엔드 개발자로 Vue.js를 이용한 하이브리드 앱을 개발</span>했고, 앱개발 초기에 들어가 앱 런칭까지 진행하며 실무능력을 쌓았습니다.
                    어떤 과제가 주어져도 쉽게 포기하지 않고 도전하여 해결하려 노력하는 개발자, 전체적인 기획을 이해하며 개발하는 개발자라는 피드백을 받을 수 있었습니다.<br/>
                    이후엔 <span className="highlight">알고리즘 역량</span>을 쌓기 위해 6개월간 하루도 빠짐없이 문제를 풀었고, 프로그래머스 상위 5%안에 든 경험이 있습니다.
                    또한 <span className="highlight">React를 이용한 토이프로젝트, Jest,Typescript, Redux</span>를 학습하며 꾸준히 성장하기 위해 노력하고 있습니다. 
                </span>
            </div>
        </div>
    )

}

export default SecondPage