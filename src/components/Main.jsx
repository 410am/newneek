
const Main = props => {

    const categorys = ["전체", "⚖️정치", "💰경제", "🌐세계", "🤖테크", "💪노동", "🌱환경", "🤝인권", "🎞문화", "🧘라이프"];

    const listItems = categorys.map((ca, index) => {
        return <li className="m-3" key={ca}>{ca}</li>
    });

    var cardSrc = [
        { "img": "/IMG_2698.jpg", "desc": "구름이 충격 근황⛅ 동그랗게 미용해..", "desc2": "2023/01 / 06  경제" },
        { "img": "/IMG_5827.jpg", "desc": "아름다운 우리 지구, 해치지 마세요!", "desc2": "photo by 재준" },
        { "img": "/KakaoTalk_20230108_234017496_04.jpg", "desc": "반짝반짝 몽총 : 오랜만에 샤워했어요!", "desc2": "2023/01/01   연예" },
        { "img": "/IMG_5816.jpg", "desc": "하얀눈이 내려 올때면", "desc2": "눈싸움 각" },
        { "img": "/IMG_3829.jpg", "desc": "저 화났어요!", "desc2": "삐진 구름이는 귀여워" },
        { "img": "/KakaoTalk_20230108_234017496_02.jpg", "desc": "충격! 김효정 쌀국수 완탕해..", "desc2": "그 앞 임은혜도 완볶한 것으로 알려져.." },
        { "img": "/KakaoTalk_20230108_234017496_05.jpg", "desc": "충격! 귤 먹는 달팽이! 집중취재!", "desc2": "2022/12/23    뇸뇸" },
        { "img": "/IMG_3711.jpg", "desc": "한 입만 주세요! 충격적인 강아지 애교 실태", "desc2": "2021/07/44   정치" },
        { "img": "/KakaoTalk_20230108_234017496_03.jpg", "desc": "충격! 아침 8시반 안양천 햇빛 강렬해..", "desc2": "2022/04/04" },
        { "img": "/KakaoTalk_20230109_004322338.jpg", "desc": "용달통닭 맛있어 아 배고파", "desc2": "2022/언제냐" },
        { "img": "/KakaoTalk_20230109_004322338_01.jpg", "desc": "충격실화! 임은혜의 맥주 따르는 법", "desc2": "김효정 빡침" },
        { "img": "/IMG_3119.jpg", "desc": "귀여우면 다냐.. 질문에 어 다다 대답..", "desc2": "구름이 그린 구름" }
    ];

    const cardList = cardSrc.map((img, index) => {
        return (
            <div className='py-0 h-4/6 grayscale hover:grayscale-0' key={index}>
                <img className='object-cover w-full h-full border border-t-0 border-black' src={img.img} alt="profile" />
                <div className='px-5 border border-t-0 border-black py-7'>
                    <h1 className='pb-2 text-lg font-bold border' >{img.desc}</h1>
                    <h2 className='font-medium' >{img.desc2}</h2>
                </div>
            </div>
        )
    });

    return (
        <div className='Main'>
            <div className='Main__news'>
                <div className='flex items-center justify-center w-full h-20 font-bold list-none bg-white border-black border-y Main__categorys'>
                    {listItems}
                </div>
                <div className='pt-0 p-28 news'>
                    <div className='grid grid-cols-4 grid-rows-4'>
                        {cardList}
                    </div>
                    <div className='flex flex-wrap justify-center w-full h-30'>
                        <button className="rounded-lg px-32 border border-black bg-white py-3 font-semibold hover:bg-[#ff6b00] h-19 w-70">
                            더보기
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main