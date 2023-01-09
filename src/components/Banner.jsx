import React from 'react'
import './Banner.css'


//"https://www.flaticon.com/kr/free-icons/" title="확대경 아이콘">확대경 아이콘  제작자: Ayub Irawan - Flaticon
//"https://www.flaticon.com/kr/free-icons/" title="사람 아이콘">사람 아이콘  제작자: spaceman.design - Flaticon
const Banner = props => {
    return (
        <header className='relative object-contain banner bg-background__color h-550px'>
            <div className='justify-center object-none text-center banner__head h-250px' >
                <br />
                <img className='head__img border-5 w-[310px] inline mb-2 bg-center' src="/images/header.png" alt='header' />
                <button className='inline float-right font-thin cursor-pointer banner__button border-5 bg-background__color outline-black'  ><img className='button__img ' src="/images/people.png" alt="people" /></button>
                <button className='inline float-right font-thin cursor-pointer banner__button border-5 bg-background__color outline-black' ><img className='button__img ' src="/images/serch.png" alt="serch" /></button>
                <br />
                <br />

                <hr className='border border-black border-solid' />
                <br />
                <h1 className='mt-3 mb-5 text-4xl banner__title'> 우리가 시간이 없지, 세상이 안궁금하냐!</h1>
            </div>
            <hr className='border border-black border-solid 1px' />
            <div className='clear-both banner__middle'>


                <div className='flex justify-around'>
                    <div className='inline mt-12 ml-20 '>
                        ✨지금 515,607명이 뉴닉을 읽고 있어요
                        <br />
                        <br />
                        세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜게 우리 탓은 아니잖아요!
                        <br />
                        월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
                        <br />
                        <br />
                        <div>
                            <form>
                                <input type="text" className='h-10 w-80' placeholder="     이메일 주소"></input>
                                <br />
                                <input type="text" className='h-10 mt-2 w-80' placeholder="     닉네임"></input>
                                <br />
                                <label><input type="checkbox" className='mt-4 ' />  개인정보 수집·이용에 동의합니다</label>
                                <br />
                                <label><input type="checkbox" className='mt-2' />  광고성 정보 수신에 동의합니다</label>
                                <br />
                                <br />
                                <button className='px-4 py-2 font-semibold text-blue-700 bg-transparent border border-black rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
                                    뉴스레터 무료구독하기
                                </button>
                                <button className='px-4 py-2 ml-3 font-semibold text-blue-700 bg-transparent border border-black rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
                                    앱 다운로드하기 →
                                </button>
                            </form>


                        </div>
                    </div>
                    <div className='inline'>
                        <img className='float-right h-full middle__img ' src="/images/middle1.png" alt="middle" />
                    </div>


                </div>


            </div>

        </header>

    )
}

export default Banner