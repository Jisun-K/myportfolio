const experienceList = {
    work: [
        {
            date: '2022.04 ~ 2022.08',
            companyName: '주식회사 와이엠씨',
            project: [
                {
                    id: '',
                    name: "전동 킥보드 서비스 앱 개발 진행",
                    contents: '정부 과제로 전동 킥보드 서비스 앱 개발에 중간 투입되어, navigation bar, main 에 사용되는 기본 기능 등 개발에 참여하였습니다.',
                }
            ],
            result: '중간에 내부 사정으로 본 소속으로 돌아가 마무리는 함께하지 못했지만, react-native를 사용하는 경험을 할 수 있었고, 어떤 식으로 프로젝트가 진행되는지 알 수 있었습니다.'
        },
        {
            date: '2022.08 ~ 2024.06',
            companyName: '주식회사 크레페스튜디오',
            project: [
                {
                    id: '',
                    name: '외주 웹 개발(운영X)',
                },
                {
                    id: '',
                    name: 'Rolling(운영X)',
                    contents: '굿 노트에서 사용하는 속지, 스티커를 판매, 구입할 수 있는 서비스( 자사 웹 )',
                    page: ''
                },
                {
                    id: 'blank',
                    name: 'BLANK',
                    contents: '여러가지의 메모, 기록할 수 있는 다이어리 웹 앱 서비스 입니다.',
                    page: ''
                },
                {
                    id: 'diary',
                    name: '그림일기장',
                    contents: 'Blank의 복잡성을 줄여 최소한의 기능으로 일별로 작성하는 그림일기 서비스입니다.',
                    page: ''
                },
                {
                    id: 'calendar',
                    name: '그림달력',
                    contents: '그림일기장과 같은 시리즈로 달력을 그림으로 기록하는 그림달력 서비스입니다.',
                    page: ''
                },
            ],
        }
    ],
    study: [
        {
            date: '2020.09 ~ 2021.02',
            companyName: '',
            title: '[2020과정평가형]정보처리산업기사(파이썬, C언어, 자바, Java, 앱프로그래밍)',
            project: [
                {
                    id: 'groupWare',
                    name: '그룹웨어 프로젝트',
                    contents: 'java, jsp를 이용하여 웹으로 구현한 팀프로젝트 입니다. 다른 팀들과는 차별점을 두며 여러가지 기능을 구현해보고 싶던 저는 회사를 다녔던 경험을 바탕으로 그룹웨어라는 주제를 선정하였습니다. 팀 프로젝트를 하며 팀원들과의 소통, 프로젝트 시작 전 계획의 중요성을 느낄 수 있었으며 갈등 혹은 문제에 대한 해결 방법의 중요성도 깨닫게 되었습니다.',
                }
            ],
            result: '정보처리산업기사 자격증 취득(2022.02)'
        },
    ]
};


export default function Experience() {
    return (
        <section className="section-base">
            <div>경력 사항</div>
        </section>
    )
}