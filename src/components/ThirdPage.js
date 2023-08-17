import react from 'react';
import "../assets/third.css"

function ThirdPage() {
    const skills = ["Vue.js", "Vuex", "React", "Redux", "Jest", "Javascript", "Typescript", "css", "scss", "MySQL", "MongoDB", "Node.js", "Django", "Github"]
    return (
        <div className="skillPage">
            <div className="skills">
                <div className="skill__title">
                    <h1>SKILLS</h1> 
                </div>
                <div className="skill__names">
                    {skills.map((item, idx) => (
                        <span key={idx}>{item}</span>
                    ))}
                    
                </div>
            </div>
            <div className="skillBox">
                <div className="skillBox__element" data-aos="flip-left" data-aos-delay="500">
                    <div className="skillName">Vue.js</div>
                    <div className="contents">
                        <div className="contents__content">o Vue3를 이용해 1년간 하이브리드 앱의 웹뷰를 개발했으며, 160개 이상의 API를 연동하고 앱 런칭을 완료했습니다.</div>
                        <div className="contents__content">o webpack-bundle-analyzer와 lazy load router를 이용해 로딩 속도를 개선했습니다.</div>
                        <div className="contents__content">o 깊어지는 컴포넌트의 데이터 전달을 효율적으로 변경하기 위해 Vuex를 도입했습니다.</div>
                    </div>
                </div>
                <div className="skillBox__element" data-aos="flip-left" data-aos-delay="500">
                    <div className="skillName">React</div>
                    <div className="contents">
                        <div className="contents__content">o 강의를 통해 React hook과 Context API를 이용한 감정일기장 토이프로젝트를 진행했습니다.</div>
                        <div className="contents__content">o Redux 및 Jest & RTL을 학습했습니다.</div>
                        <div className="contents__content">o 딥브레인 AI아카데미를 통해 MERN스택을 학습하고, 3주간 "독거노인을 위한 AI알림서비스" 프로젝트를 진행했습니다.</div>
                    </div>

                </div>
                <div className="skillBox__element" data-aos="flip-left" data-aos-delay="500">
                    <div className="skillName">Javascript</div>
                    <div className="contents">
                        <div className="contents__content">o ES6문법에 익숙합니다</div>
                        <div className="contents__content">o async/await를 이용한 비동기처리에 익숙합니다.</div>
                    </div>
                </div>
                <div className="skillBox__element" data-aos="flip-left" data-aos-delay="500">
                    <div className="skillName">Typescript</div>
                    <div className="contents">
                        <div className="contents__content">o 강의를 통해 타입, 인터페이스, 제너릭 등 타입스크립트 기초에 대해 학습했습니다.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage