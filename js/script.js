//#1. 헤더공간 구성(href를 통해서 사용자가 원하는 페이지를 불러올 수 있도록 구성하기 위함)
Vue.component("header-el", {
    data : () => {
        return {
            global_menu : ["about", "skill", "portfolio", "contact"]
        }   
    },
    methods : {
        openFunc(evt){
            const $menuPart = document.querySelector("header .wrap .menu ul");
            const $openBtn = document.querySelector("header .wrap .menuOpenBtn img");
            const $active_btn = $menuPart.classList.contains("active");
            if(!$active_btn){
                $openBtn.setAttribute("src", "./img/menu_close.png");
                $menuPart.classList.add("active");
            }
            else{
                $openBtn.setAttribute("src", "./img/menu_open.png");
                $menuPart.classList.remove("active");
            }
        },

    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <router-link to="/"><img src="./img/logo_1.png" alt="포트폴리오 로고"></router-link>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="menu in global_menu" @click="openFunc">
                        <router-link class="gt" :to="'/'+menu">{{menu}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="menuOpenBtn">
                <img src="./img/menu_open.png" @click="openFunc" alt="메뉴 버튼">
            </div>
        </div>
    </header>
    `
});

const gitDeco = {
    template : `
    <section id="gitDeco">
        <div class="wrap">
            <h3 class="gt">click Me!!</h3>
            <a href="https://github.com/jinyeaju" target="_blank"><img src="./img/github_1.png" alt="Git허브 연결 아이콘"></a>
        </div>
    </section>
    `
}

//data 패턴(2차배열) = [이미지, 타이틀]
const pageAbout = {
    template : `
    <section id="about">
        <div class="wrap">
            <div class="myself">
                <div class="myimage">
                    <img src="./img/jinyeaju_image.jpg" alt="진예주 증명사진">
                </div>
                
                <div class="mygreet">
                    <p class="gt">Junior Web Publisher & Front-End Developer</p>
                    <h3>안녕하세요</h3>
                    <h3>끊임없는 <span>배움</span>으로 더욱 <span>성장</span>하고 싶은</h3>
                    <h3 class="myname"><span>진예주</span>입니다.</h3>
                </div>
            </div>

            <div class="profile">
                <h3>진예주</h3>
                <p>
                    <span>인적사항</span>
                    연락처 : 010-9556-3303<br>
                    이메일 : jyj08278@gmail.com<br>
                    Git 주소 : https://github.com/jinyeaju<br>
                </p>
 
                <p>
                    <span>자기소개</span>
                    PHP를 활용하여 MBTI를 통해 클래스를 추천해주는 사이트, CUSCLA(Customized Class)를 제작하고
                    Vue.js를 활용하여 포트폴리오를 담을 수 있는 케이스를 제작한 경험이 있으며 컴포넌트를 이용한 웹사이트 제작에도 관심이 많습니다. <br>
                    현재에 머물러 있는 것이 아니라 더 개선하고 발전하고 싶습니다. 
                </p>

                <p>
                    <span>개인 프로젝트</span>
                    <span class="pro_tit">
                        CUSCLA(Customized Class)<br>
                    </span>
                    · MBTI를 통해 클래스를 추천해주는 사이트 <br>
                    · 요즘 사람들은 만날 때 전화번호보다는 카톡, 인스타그램 아이디를 교환하거나 
                    성격을 쉽게 알 수 있는 성격 지표 검사인 MBTI 유형을 서로 묻고는 합니다. 
                    그래서 저는 MBTI를 통해서 사용자가 최적으로 만족할만한 클래스를 추천하는 사이트를 
                    만들어보자는 생각으로 1인 작업인 CUSCLA를 제작하게 되었습니다.
                    <span class="pro_tit_second">
                        사용 기술(언어)<br>
                    </span>
                    · HTML, CSS, Javascript, JQuery, PHP, My-SQL
                    <span class="pro_tit_second">
                        제작단계<br>
                    </span>
                    · 구성 스케치 → 메뉴 구성도 제작 → 포토샵을 통한 와이어프레임 제작 → 로고 제작 → 콘텐츠 구성 → 이미지 삽입 → 코드 작업 진행 중
                </p>

                <p class="language">
                    <span>기술</span>
                    · html5, css3, Javascript, J-Query, PHP, My-SQL, Vue
                    <ul>
                        <li><i class="fa-brands fa-html5"></i></li>
                        <li><i class="fa-brands fa-css3-alt"></i></li>
                        <li><i class="fa-brands fa-js"></i></li>
                        <li><i class="fa-brands fa-php"></i></li>
                        <li><i class="fas fa-database"></i></li>
                        <li><i class="fa-brands fa-vuejs"></i></li>
                    </ul>
                </p>

                <p>
                    <span>학력</span>
                    <span class="pro_tit_second">
                        2018. 02. 23 ~ 2022. 02. 18 배화여자대학교(스마트IT과) 졸업<br>
                    </span>
                    · 한 가지 분야를 깊숙히 배우는 것이 아니라 데이터베이스나 SW 테스팅, 파이썬, 자료구조 등의
                    여러 가지 분야를 조금씩 배우는 과정으로 구성되어 있습니다.
                    <span class="pro_tit_second">
                        2021. 12. 30 ~ 2022. 07. 31 UI & UX 적응형반응형 웹디자인&웹퍼블리셔 수료<br>
                    </span>
                    · 웹디자인와 웹퍼블리셔 직무에 해당하는 스케치 방법, 와이어프레임 제작,<br>
                    프론트 엔드 개발에 전반에 해당하는 학업
                </p>

                <p>
                    <span>그 외</span>
                    2022.01	수상내역/공모전	2021학년도 IT공모전	배화여자대학교<br>
                    2018.11	수상내역/공모전	2018 IIBC Start-up Invention Contest (사)한국인터넷방송통신위원회<br>
                    <a href="https://introduce0827.netlify.app" target="_blank">자기소개서(클릭)</a>
                </p>       

            </div>

        </div>
    </section>
    `
}
const pageSkill = {
    data : () => {
        return { 
            score : [
                ["html5", "90"],
                ["css3", "80"],
                ["javascript", "75"],
                ["jQuery", "70"],
                ["php", "60"],
                ["mysql", "70"],
                ["vue", "70"],
            ]
        }
    },

    template : `
    <section id="circle_bar">
        <div class="vscIcon">
            <img src="./img/Visual_Studio_Code_icon.png">
            <h3>텍스트 에디터는 Visual Studio Code를<br>메인으로 사용하고 있습니다.</h3>
        </div>
        <div class="frame">
            <h3 class="gt">Skills</h3>
            <div class="box bx1" v-for="list in score">
                <div class="cont">
                    <div class="top">
                        <svg>
                            <circle cx="70" cy="70" r="70"/>
                            <circle cx="70" cy="70" r="70"/>
                        </svg>
                        <div class="num">
                            <h2>
                                <span class="count" :data-limit="list[1]">{{list[1]}}</span>
                                <span>%</span>
                            </h2>
                        </div>
                    </div>
                    <div class="bottom">
                        <h2 class="cont_text">{{list[0]}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    `,
    mounted() {
        const interval = setInterval(() => {
            gageUp();   
        }, 500);
        function gageUp(){
            const startCount = 0;

            $("#circle_bar .box").each(function(index){
                const sel_count = $(this).find(".count").attr("data-limit");
                $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(440 - 440 * ${sel_count} / 100)`);
            });
        }
        
    },

}

const pagePortfolio = {
    data : () => {
        return { 
            //["사이트명", "사이트 이미지명", "사이트 경로", "사이트 컨셉 설명", ["사용언어1", "사용언어2", ..],
            siteArr : [
                ["My Github", "git.png", "https://github.com/jinyeaju", "진예주의 깃허브 입니다", ["(직접 만든 사이트 X)", "감사합니다."] ],
                ["Cuscla", "cuscla.png", "http://jinyeaju0827.dothome.co.kr/cuscla/", "PHP를 활용한 MBTI별 취향에 딱! 맞는 클래스 추천 판매 사이트", ["html5", "css3", "javascript", "jQuery", "php", "mysql"] ],
                ["Film Maker", "audition_vue.png", "https://jinyeaju.github.io/Audition/", "Vue를 활용한 배우 오디션 사이트", ["html5", "css3", "javascript", "jQuery", "vue"] ],
                ["My Chat", "mychat.png", "http://jinyeaju.dothome.co.kr/chattingApp/", "Firebase를 활용한 실시간 채팅앱", ["html5", "css3", "javascript", "jQuery", "Firebase"] ],
                ["장사리", "movie_ajax.png", "https://jinyeaju.github.io/Jangsari_movie/", "Ajax를 활용한 영화 장사리 홍보 사이트", ["html5", "css3", "javascript", "jQuery", "ajax"] ],
                ["OClass", "oclass.png", "http://jinyeaju.dothome.co.kr/oclass/", "PHP를 활용한 온라인 클래스 사이트", ["html5", "css3", "javascript", "jQuery", "php", "mysql"] ],
                ["National Geographic", "national_geographic.png", "https://ngeo0827.netlify.app", "Vue를 활용한 네셔널 지오그래픽 사이트", ["html5", "css3", "javascript", "jQuery", "vue"] ],
                ["Today`s Weather", "weatherApp.png", "https://jinyeaju.github.io/weatherApp/", "Ajax를 활용한 날씨 데이터 받아와서 지역별 날씨정보를 알려주는 사이트", ["html5", "css3", "javascript", "jQuery", "ajax"] ],
                ["Music Box", "music_box.png", "https://jinyeaju.github.io/music_box/", "javascript를 활용한 음악 재생 사이트", ["html5", "css3", "javascript"] ],
                ["adAge", "adAge.png", "https://jinyeaju.github.io/adAge/", "hash를 활용한 글로벌 메뉴 작동 사이트", ["html5", "css3", "javascript", "jQuery"] ],
                ["Origin", "origin.png", "https://jinyeaju.github.io/Origin_2022/", "grid를 활용한 이미지 배치 중점의 사이트", ["html5", "css3", "javascript", "jQuery"] ],
                ["B&O Play", "bnostore.png", "https://jinyeaju.github.io/B-O-Play/", "html과 css를 활용한 음향 기기 브랜드 사이트", ["html5", "css3"] ],
                ["Cashmere", "cashmere.png", "https://jinyeaju.github.io/cashmere_2022/", "html과 css를 활용한 의류 브랜드 사이트", ["html5", "css3"] ],
                ["theAisleWedding", "wedding.png", "https://jinyeaju.github.io/theAisleWedding/", "html과 css를 활용한 웨딩 브랜드 사이트", ["html5", "css3"] ],
                ["세종병원", "hospital.png", "https://jinyeaju.github.io/SejongHospital/", "html과 css를 활용한 세종병원 사이트", ["html5", "css3"] ],
                ["CakeHouse", "cakehouse.png", "https://jinyeaju.github.io/cakehouse_2022/", "html과 css를 활용한 제과점 사이트", ["html5", "css3"] ],
                ["Kuliner", "kuliner.png", "https://jinyeaju.github.io/kuliner/", "html과 css를 활용한 음식점 사이트", ["html5", "css3"] ],
            ],
        }
    },
    methods : {
        openPop(evt){
            console.log("클릭 이벤트 발생");

            const $task = document.querySelectorAll(".wrap .task_part");
            const $pop = document.querySelector(".popup");

            // console.log($task);

            for(v of $task){
                console.log(v);
            
                const $active_pop = $pop.classList.contains("active");
                // console.log($active_pop);

                if(!$active_pop){
                    $pop.classList.add("active");
                    const $title = evt.currentTarget.querySelector(".title").textContent;
                    const $concept = evt.currentTarget.querySelector(".concept").textContent;
                    const $href = evt.currentTarget.querySelector("a").getAttribute("href");
                    const $src = evt.currentTarget.querySelector(".portview").style.backgroundImage;
                    $pop.querySelector(".title").textContent = $title;
                    $pop.querySelector(".concept").textContent = $concept;
                    $pop.querySelector("a").setAttribute("href", $href);
                    $pop.querySelector(".popview").style.backgroundImage = $src;
                }else{
                    $pop.classList.remove("active");
                }

            }
        },
        closePop(){
            const $pop = document.querySelector(".popup");
            $pop.classList.remove("active");
        }

    },
    template : `
    <section id="portfolio">
        <div class="wrap">

            <div class="task_part" v-for="list in siteArr" :key="" @click="openPop">
                <div class="left_preview">
                    <div class="left_wrap">
                        <img src="./img/macbook.png" alt="">
            
                        <div class="incase">
                            <div class="portview" :style="'background-image: url(../img/capture_image/'+ list[1] +')'"></div>
                        </div>
                    </div>
                </div>
                <div class="right_intro">
                    <h3 class="title gt">{{list[0]}}</h3>
                    <p class="concept">{{list[3]}}</p>
                    <ul class="language">
                        <li v-for="listTwo in list[4]">{{listTwo}}</li>
                    </ul>
                    <a class="gt" :href="list[2]" target="_blank">go page</a>
                </div>
            </div>

            <div class="popup">
                <div class="popdark">
                    <img src="./img/macbook.png" alt="">
    
                    <div class="popcase">
                        <div class="popview"></div>
                    </div>
    
                    <div class="right_intro">
                        <h3 class="title">site title</h3>
                        <p class="concept">site concept 설명</p>
                        <a class="gt" href="" target="_blank">go page</a>
                    </div>


                    <div class="popClose">
                        <button type="button" @click="closePop">×</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}
const pageContact = {

    template : `
    <section id="contact">
        <div class="wrap">
            <h2 class="gt">Contact Me <span class="gt">(from G-Mail)</span></h2>
            <form class="gform form-element" name="contactMe" method="post" 
            action="https://script.google.com/macros/s/AKfycbweY2DHuTUYwVeVaIVHPRhqnJKI07qrh-dCGHa75Q/exec">
                <div class="formlist">
                    <ul>
                        <li>
                            <label for="name">이름 또는 회사명<sup>*</sup></label>
                            <span class="inputbox">
                                <input type="text" id="name" name="name" placeholder="이름 또는 회사명을 입력해주세요" required autocomplete="off"> 
                            </span>
                        </li>
                        <li>
                            <label for="email">답변받을 이메일<sup>*</sup></label>
                            <span class="inputbox">
                                <input type="email" id="email" name="email" placeholder="sample@gmail.com" required autocomplete="off">
                            </span>
                        </li>
                        <li>
                            <label for="message">문의 내용<sup>*</sup></label>
                            <span class="inputbox">
                                <textarea name="message" id="message" placeholder="문의 사항을 입력해 주세요" required autocomplete="off"></textarea>
                            </span>
                        </li>
                    </ul>
                    <div class="btn_box">
                        <button type="submit" class="command_btn">문의하기</button>
                    </div>
                </div>

                <div class="thankyou_message">
                    <article>
                        <h1>작성된 내용이 모두 전송되었습니다.</h1>
                        <p>메일 확인 후 연락드리겠습니다.</p>
                        <p>감사합니다.</p>
                        <div class="btn_box">
                            <a href="" class="close">닫기</a>
                        </div>
                    </article>
                </div>
            </form>
            <span class="comment">작성하신 내용은 메일로 전송됩니다.</span>
        </div>
    </section>
    `,
    mounted(){
        (function(){
        if( window.localStorage )
        {
            if( !localStorage.getItem('firstLoad') )
            {
            localStorage['firstLoad'] = true;
            window.location.reload();
            }
            else
            localStorage.removeItem('firstLoad');
        }
        })();

    },

}



const rtRoutes = [
    {
        path : "/",
        component : pageAbout
    },
    {
        path : "/about",
        component : pageAbout
    },
    {
        path : "/skill",
        component : pageSkill
    },
    {
        path : "/portfolio",
        component : pagePortfolio
    },
    {
        path : "/contact",
        component : pageContact
    },


];

const router1 = new VueRouter({
    routes : rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footer = {
    template : `
    <footer><p>Copyrights &copy; ${year} Jin YeaJu Portfolio</p></footer>
    `
}

new Vue({
    el : "#app",
    router : router1,
    components : {
        "gitdeco-el" : gitDeco,
        "footer-el" : footer,
    },

});


$(document).ready(function(){
    // contact part
    $(".close").click(function(){
        $(".thankyou_message").hide();
        return false;
    });
    
    
    
    // skill part

    $("#circle_bar .box").each(function(index){
        $(this).find("circle").last().css("stroke-dashoffset", "440");
    });

        let startCount = 0;

        $("#circle_bar .box").each(function(index){

            const sel_count = $(this).find(".count").attr("data-limit");
            console.log(sel_count);

            $(this).find("circle").last().css({"stroke-dashoffset" : (440 - 440 * sel_count / 100), "transition":"stroke-dashoffset 2s"});

            const counter = setInterval(function(){
                if(startCount < sel_count){
                    startCount++;
                    console.log(startCount);
                    $(".box").eq(index).find(".count").text(startCount);
                }else if(startCount == sel_count){ 
                    $(".box").eq(index).find(".count").text(sel_count);
                    clearInterval(counter);
                }else{
                    $(".box").eq(index).find(".count").text(sel_count);
                    clearInterval(counter);
                }
            }, 100); /* end of counter(setInterval) */

        }); /* end of each */

});


