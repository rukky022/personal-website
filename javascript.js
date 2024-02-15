window.addEventListener("load", () => {
    var d = new Date();
    document.getElementById("copyright").innerText = '\xA9 ' +  d.getFullYear().toString() + " ruqayyah muse. all rights reserved";

    document.getElementById("linkedin").onclick = function () {
        window.open("https://linkedin.com/in/rmuse/");
    };
    
    document.getElementById("github").onclick = function () {
        window.open("https://github.com/rukky022");
    };


    if(document.getElementById("email")) {
        document.getElementById("email").onclick = function () {
            var link = "mailto:ruqayyahmuse@gmail.com?subject="+encodeURIComponent("Portfolio Inquiry: ") + "";
            window.location.href = link;
        };
        
        document.getElementById("email").style.marginTop = '5vh';
    }

    mobileView();
    
})

window.addEventListener("resize", mobileView);

function mobileView() {
    if (window.matchMedia('screen and (max-width: 450px)').matches) {
        document.getElementById("dropdown").classList.toggle("no_show");
        document.getElementsByClassName("navigation")[0].classList.toggle("no_show");
        document.getElementById("hamburger_menu").onclick =  function () {
            console.log("clicked");
            document.getElementById("dropdown_content").classList.toggle("no_show");
        };
        if(document.getElementsByClassName("dashed_section").length > 0) {
            for (let i = 0; i < document.getElementsByClassName("dashed_section").length; i++) {
                const section_h2 = document.getElementsByClassName("section_header")[i].children[0];
                section_h2.style.width = "fit-content";
                const element = document.getElementsByClassName("dashed_section")[i];
                const h2_percent = (section_h2.offsetWidth / document.getElementsByClassName("section_header")[i].offsetWidth);
                element.style.width = "" + (0.9 - h2_percent) * 100 + "%";
            }
        }
        if(document.getElementsByClassName("about").length > 0) {
            for (let k = 0; k < document.getElementsByClassName("about").length; k++) {
                document.getElementsByClassName("about")[k].children[2].style.fontSize = "2vh";                
            }
        }
        if(document.getElementsByClassName("h3s").length > 0) {
            for (let j = 0; j < document.getElementsByClassName("h3s").length; j++) {
                const h3s = document.getElementsByClassName("h3s")[j];
                h3s.style.flexDirection = "column";
                const h31 = h3s.children[0];
                const h32 = h3s.children[1];
                h31.style.fontSize = "2.5vh";
                h32.style.display = "none";
                document.getElementsByClassName("h4s")[j].children[1].innerText = h32.innerText;
                document.getElementsByClassName("h4s")[j].children[1].style.textAlign = "right";
            }
        }
        
    } else {
        if (document.getElementById("dropdown").classList.value.includes("no_show") && !document.getElementById("dropdown_content").classList.value.includes("no_show")) {
            document.getElementById("dropdown_content").classList.toggle("no_show");
        }
    }
    
    if(window.matchMedia('screen and (max-width: 535px)').matches) {
        if(document.getElementsByClassName("contact_content").length > 0){
            document.getElementsByClassName("contact_content")[0].style.alignItems = "flex-start";
            document.getElementsByClassName("contact_content")[0].style.flexDirection = "column";
            document.getElementsByClassName("contact_content")[0].style.marginTop = "0";
            document.getElementsByClassName("contact_content")[0].style.width = "100%";
            document.getElementsByClassName("connect_cards")[0].style.flexDirection = "column";
            document.getElementsByClassName("connect_cards")[0].style.width = "100%";
            for (let k = 0; k < document.getElementsByClassName("connect").length; k++) {
                document.getElementsByClassName("connect")[k].style.margin = "5vh 2vw";            
                document.getElementsByClassName("connect")[k].style.justifyContent = "flex-start";            
            }
        }
    }

    if(window.matchMedia('screen and (max-width: 700px)').matches) {
        document.getElementsByClassName("footer")[0].style.flexDirection = "column";

    }

    if(window.matchMedia('screen and (max-width: 1024px)').matches) {
        document.body.style.width = "" + window.innerWidth + "px"
        document.getElementsByClassName("page_content")[0].style.margin = "5vh 5vh";
        if(document.getElementsByClassName("home_page").length > 0) {
            const homepage_card = document.getElementsByClassName("home_page")[0].children[0];
            homepage_card.classList.add("full_size");
            homepage_card.style.boxShadow = "none";

            const buttons = homepage_card.children[0].children[3];
            buttons.style.flexDirection = "column";
            for (let i = 0; i < buttons.children.length; i++) {
                const btn = buttons.children[i].children[0];
                buttons.children[i].style.width = "100%";
                btn.classList.add("full_btn");
            }
        }

        if(document.getElementsByClassName("projects").length > 0) {
            document.getElementsByClassName("projects")[0].style.margin = "auto 0";
            for (let m = 0; m < document.getElementsByClassName("text_img").length; m++) {
                const element = document.getElementsByClassName("text_img")[m];
                element.classList.add("full_size");
            }
            for (let m = 0; m < document.getElementsByClassName("v_text_img").length; m++) {
                const element = document.getElementsByClassName("v_text_img")[m];
                element.classList.add("full_size");
            }
            document.getElementsByClassName("top_row")[0].style.flexDirection = "column";
            document.getElementsByClassName("horizontal")[0].style.flexDirection = "column";
            document.getElementsByClassName("bottom_row")[0].style.flexDirection = "column";

            document.getElementsByClassName("left_col")[0].style.width = "auto";
            document.getElementsByClassName("right_col")[0].style.width = "auto";

            for (let d = 0; d < document.getElementsByClassName("vertical_card").length; d++) {
                const element = document.getElementsByClassName("vertical_card")[d];
                element.style.width = "auto";
                element.style.marginLeft = "0";
                element.style.marginRight = "0";
            }
        }

        if(document.getElementsByClassName("tech_stack").length > 0) {
            for (let j = 0; j < document.getElementsByClassName("tech_stack")[0].children.length; j++) {
                const img = document.getElementsByClassName("tech_stack")[0].children[j];
                img.style.width = "auto";
                img.style.height = "8vh";     
            }
        }
    }
}