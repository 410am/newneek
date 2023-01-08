import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = props => {
    const [news, setNews] = useState([]);
    console.log(news);

    const categorys = ["전체", "⚖️정치", "💰경제", "🌐세계", "🤖테크", "💪노동", "🌱환경", "🤝인권", "🎞문화", "🧘라이프"];

    const listItems = categorys.map((ca, index) => {
        return <li className="m-3" key={ca}>{ca}</li>
    });

    return (
        <header className='Main'>
            <div className='Main__news'>
                <div className='flex items-center justify-center w-full h-20 font-bold list-none bg-white border-black border-y Main__categorys'>
                    {listItems}
                </div>
                <div className='pt-0 news p-14'>
                    <div className='grid grid-cols-4 grid-rows-3'>
                        <div className='relative'>
                            {/* 수정중! 무시해주세용 */}
                            <div className='absolute opacity-0 artcl hover:opacity-100'><h1>구름이 충격 근황<br />동그랗게 미용해..</h1></div>
                            <img className='object-cover w-full border border-black grayscale hover:grayscale-0 h-1/2' src="\IMG_2698.jpg" alt="profile" />
                        </div>
                        <img className='object-cover w-full border border-black grayscale hover:grayscale-0 h-1/2' src="\IMG_2935.jpg" alt="profile" />
                        <img className='object-cover w-full border border-black grayscale hover:grayscale-0 h-1/2' src="\IMG_3711.jpg" alt="profile" />
                        <img className='object-cover w-full border border-black grayscale hover:grayscale-0 h-1/2' src="\IMG_3119.jpg" alt="profile" />
                    </div>
                    {/* <div className='artcl'>구름이 충격 근황<br />동그랗게 미용해..</div> */}
                    {/* </div> */}
                </div>
            </div>
        </header >


    )
}

export default Main