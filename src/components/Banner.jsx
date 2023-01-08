import React from 'react'
import './Banner.css'


//"https://www.flaticon.com/kr/free-icons/" title="확대경 아이콘">확대경 아이콘  제작자: Ayub Irawan - Flaticon
//"https://www.flaticon.com/kr/free-icons/" title="사람 아이콘">사람 아이콘  제작자: spaceman.design - Flaticon
export const Banner = props => {
    return (
        <header className='banner bg-background__color h-550px object-contain relative'>
            <div className='banner__head justify-center object-none text-center h-250px' >
                <br />
                <img className='head__img border-5 w-[310px] inline mb-2 bg-center' src="/images/header.png" alt='header' />
                <button className='banner__button border-5 float-right inline cursor-pointer bg-background__color outline-black font-thin'  ><img className='button__img ' src="/images/people.png" alt="people" /></button>
                <button className='banner__button border-5 float-right inline cursor-pointer bg-background__color outline-black font-thin' ><img className='button__img ' src="/images/serch.png" alt="serch" /></button>
                <br />
                <br />

                <hr className='border border-solid border-black' />
                <br />
                <h1 className='banner__title text-4xl mt-3 mb-5'> 우리가 시간이 없지, 세상이 안궁금하냐!</h1>
            </div>
            <hr className='border border-solid 1px border-black' />
            <div className='banner__middle clear-both'>


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
                                <input type="text" className='w-80 h-10' placeholder="     이메일 주소"></input>
                                <br />
                                <input type="text" className='w-80 h-10 mt-2' placeholder="     닉네임"></input>
                                <br />
                                <label><input type="checkbox" className='mt-4 ' />  개인정보 수집·이용에 동의합니다</label>
                                <br />
                                <label><input type="checkbox" className='mt-2' />  광고성 정보 수신에 동의합니다</label>
                                <br />
                                <br />
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
                                    뉴스레터 무료구독하기
                                </button>
                                <button className='ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
                                    앱 다운로드하기 →
                                </button>
                            </form>


                        </div>
                    </div>
                    <div className='inline'>
                        <img className='middle__img h-full float-right ' src="/images/middle1.png" alt="middle" />
                    </div>


                </div>


            </div>

        </header>

    )
}

