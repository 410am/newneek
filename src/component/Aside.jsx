import React from 'react'
import './Aside.css'

const Aside = () => {
  return (
    <aside>
        <a class="aside__gosignin" href="https://app.newneek.co/" target="_blank">
            <figure class="aside__logo">
                <img alt="newneek logo" src="public\images\bottom_removebg-preview.png"></img>
            </figure>
            <div class="aside__downloadapp">
                더 편하게 보고 싶다면? 뉴닉 앱에서 만나요!
            </div>
        </a>
        <div class="newsbox">
            <a href="https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56" target="_blank">
                <div class="newsbox__content">퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈</div>
            </a>
            <a href="https://www.notion.so/90eb61e64b18407196422b3405a3bab6" target="_blank">
                <div class="newsbox__content">3월 8일에 업데이트된 뉴닉의 여성용어 가이드 🍞🌹</div>
            </a>
            <a href="/" target="_blank">
                <div class="newsbox__subscribe">오늘까지 588회 뉴스레터를 발행했고 515,900명이 구독했어요!</div>
                {/* <marquee direction="right">
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                    <span aria-hidden="true">뉴스레터 구독하기</span>
                </marquee> */}
            </a>
        </div>
    </aside>
  )
}

export default Aside

