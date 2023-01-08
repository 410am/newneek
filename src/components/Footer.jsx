import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>

        <div class="footer__">

            <div class="footer__logo">
                <a href="/" target="" class="">
                    <img alt="newneek logo" src="public\images\header_removebg-preview.png"></img>
                </a>
            </div>
            
            <div class="footer__nav1">
                <a class="__nav" href="https://newneek.co/about" >뉴닉탄생기</a>
                <a class="__nav" href="https://newneek.co/help">고객센터</a>
                <a class="__nav" href="https://newneek-app.channel.io/lounge" target="_blank">앱 오류 문의</a>
                <a class="__nav" href="https://www.instagram.com/newneek.official/" target="_blank">인스타그램</a>
            </div>
            
            <div class="footer__nav2">
                <a class="__nav" href="https://withall.newneek.co/" target="_blank">모두와 함께, 뉴닉</a>
                <a class="__nav" href="https://mmgh.newneek.co/" target="_blank">물물교환</a>
                <a class="__nav" href="https://webuildup.newneek.co/" target="_blank">여성의 날</a>
                <a class="__nav" href="https://napp.newneek.co/2020election/" target="_blank">2020 총선</a>
            </div>
            
            <div class="footer__nav3">
                <a class="__nav" href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769" target="_blank">서비스이용약관</a>
                <a class="__nav" href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19" target="_blank"><strong>개인정보처리방침</strong></a>
                <a class="__nav">&nbsp;</a>
                <a class="__nav">&nbsp;</a>
            </div>
        </div>

        <div class="address__">
            <p class="__address" id="__address1">
                ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
            </p>
            <p class="__address">
                서울특별시 마포구 어울마당로 35, 5층 (04048)
            </p>
            <p class="__address">
                근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
            </p>
            <p class="copyright__">
                <br/>ⓒ NEWNEEK Co., Ltd. 2018-2020
            </p>
        </div>
    </footer>
  )
}

export default Footer