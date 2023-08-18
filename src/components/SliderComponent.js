import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import '../assets/fourth.css'


function SliderComponent({array}) {
    const {image, title, index} = array
    const contents = [
        {
            skills:['React', 'React hook', 'css', 'Context API', 'firebase'],
            date: '2023.06.20 - 2023.07.02 (2주)',
            contribution: 'Frontend 100% (1인)',
            subject: (<h2>React강의를 토대로 진행한 개인 프로젝트 감정일기장</h2>),
            content: ['■ React hook 기반 개발 및 Context API를 이용한 상태관리',
                '■ CRUD를 이용한 일기장 작성 및 수정, 삭제 기능',
                '■ firebase를 이용한 배포 진행',
                '■ localStorage를 이용한 데이터 저장',
                '■ 그 외 Typescript, Redux, Jest & RTL에 대해 학습 진행완료'],
        },
        {
            skills:['Vue.js', 'Vuex', 'scss', 'Git', 'Toad', 'Swagger', 'vue-chart.js', 'swiper.js'],
            date: '2021.06.16 - 2022.06.30 (1년)',
            contribution: 'Frontend 90% (1인)',
            subject: (<h2>피드 기반 체육인을 위한 구인구직 및 진로검사 <br/>서비스를 제공하는 하이브리드 앱, bearun</h2>),
            content: [
                '■ 프론트엔드로 앱 개발 초기에 들어와 1년간 150개 이상의 API를 연동하고 런칭까지 완료',
                '■ vue-chart.js를 이용한 진로 검사 솔루션 및 검사 결과 페이지 개발',
                '■ Vuex 사용하여 props, emit 복잡성 개선',
                '■ Git Branch의 사용을 도모하여 프로젝트 버전을 나누어 관리를 할 수 있게 함',
                '■ lazy component 와 loader 용량 줄이기, 이미지 압축 등을 이용한 앱 속도 개선',
                '■ scss 사용하여 반응형 서비스에 맞는 스타일 적용'
            ],
        },
        {
            skills:['Vue.js', 'Vuex', 'css', 'Git', 'Swagger', 'Jira'],
            date: '2020.10.12 - 2020.11.27 (7주)',
            contribution: 'Frontend 30% (3인)',
            subject: (<h2>AI 초입자 및 간단한 실습을 통해 코드를 보고싶은<br/> 사용자들을 위한 이미지, TEXT AI학습플랫폼</h2>),
            content: [
                '■ Vue.js를 이용한 API 통신',
                '■ Vuex를 사용하여 중앙 데이터 관리',
                '■ SSH를 이용해 Vue.js build파일 배포 진행',
                '■ Git branch와 Jira를 이용한 협업',
                '■ CSS를 이용한 UI/UX작업',
                '■ 프로젝트 우수상 수상 (3등)'
            ]

        },
        {
            skills:['Vue.js', 'css', 'Git', 'Swagger', 'Jira'],
            date: '2020.08.31 - 2020.10.08 (6주)',
            contribution: 'Frontend 30% (3인)',
            subject: (<h2>청각장애인을 위한 화상회의 서비스</h2>),
            content: [
                '■ Vue.js를 이용한 REST API 통신',
                '■ 인터랙티브 웹을 이용한 프롤로그 제작',
                '■ Git branch와 Jira를 이용한 협업',
                '■ CSS를 이용한 UI/UX작업(100%) - 미팅룸 UI/UX 구현',
                '■ 프로젝트 우수상 수상 (1등)'
            ],
        },
        {
            skills:['Vue.js', 'css', 'Git', 'Swagger', 'Jira'],
            date: '2020.07.13 - 2020.08.21 (6주)',
            contribution: 'Frontend 30% (3인)',
            subject: (<h2>IT취업준비생을 위한 SNS서비스</h2>),
            content: [
                '■ Vue.js를 이용한 REST API 통신 - 댓글작성, 알고리즘 게시글 작성, 피드 등',
                '■ Git branch와 Jira를 이용한 협업',
                '■ CSS를 이용한 반응형 UI/UX작업',
                '■ 프로젝트 우수상 수상 (2등)'
            ],
        }
    ]
    
    
    return (
        <div className="slide">
            <div className="project__title">
                <h1>{title}</h1>
            </div>
            <div className="slide__img slide__img__none">
                <img src={process.env.PUBLIC_URL + image} alt={image} />
            </div>
            <div className="slide__context">
                <div className="subject">
                    {contents[index].subject}
                </div>
                <div className="skill">
                    {contents[index].skills.map((skill, idx)=>(
                        <span key={idx}>
                            {skill}    
                        </span>
                    ))}
                </div>
                <div className="date_contribution">
                    <span className="date">{contents[index].date}</span>
                    <span className="contribution">{contents[index].contribution}</span>
                </div>
                <div className="content">
                    {contents[index].content.map((content, idx)=>(
                        <p key={idx}>
                            {content}    
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SliderComponent