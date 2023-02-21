const chatArea = document.querySelector(".chat-area");
const rightSide = document.getElementById("right-side-name");

const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const person3 = document.getElementById("person3");
const person4 = document.getElementById("person4");
const person5 = document.getElementById("person5");


person1.addEventListener("click", islem)

function islem(){
    rightSide.innerHTML=`
    <img class="profil-pic rounded-circle" src="./images/pic3.jpg" alt="">
    <span class="ms-3">Mustafa Koç</span>
    <span class="float-end mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </span>
    `;
    chatArea.innerHTML=`
                    <div class="message-area">
                       
                    </div>
                    <div class="chat-input-area">
                        <div class="row">
                            <div class="col-sm-1 mt-4 ms-5">
                                <span class="d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-sm-9 mt-3"><input id="yaziGiris" type="text" class="form-control"
                                    placeholder="bir mesaj yazın"></div>
                            <div class="col-sm-1 mt-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
    `
    
    const messageArea = document.querySelector(".message-area");
    const yaziGiris = document.getElementById("yaziGiris");
    
    yaziGiris.addEventListener("keypress", function (e){
        if(e.key === "Enter"){
        let pEl = document.createElement("p");
        let zaman = document.createElement("span");
        let checkTick = document.createElement("span");
        let divEl = document.createElement("div");
        
        divEl.setAttribute("class", "divElclass");
        
        let date = new Date();
        let d = date.getHours()+ ':' + date.getMinutes();
        console.log(d)
        zaman.innerHTML = d;
        
        checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            
        let tickTimeout = setTimeout(myfunc,2000);
        function myfunc(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        let tickTimeout2 = setTimeout(myfunc2,3000);
        function myfunc2(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0099ff" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        
        
        
        pEl.innerHTML = yaziGiris.value;
        
        divEl.append(zaman);
        divEl.append(checkTick);
        const part1 = divEl.insertBefore(pEl,divEl.firstChild);
        const part2 = messageArea.insertBefore(divEl,messageArea.firstChild);
        part2.insertBefore(part1,part2.firstChild);
        yaziGiris.value = "";
    
    }})
}

person2.addEventListener("click", islem2)

function islem2(){
    rightSide.innerHTML=`
    <img class="profil-pic rounded-circle" src="./images/pic2.jpg" alt="">
    <span class="ms-3">Burak</span>
    <span class="float-end mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </span>
    `;
    chatArea.innerHTML=`
                    <div class="message-area">
                       
                    </div>
                    <div class="chat-input-area">
                        <div class="row">
                            <div class="col-sm-1 mt-4 ms-5">
                                <span class="d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-sm-9 mt-3"><input id="yaziGiris" type="text" class="form-control"
                                    placeholder="bir mesaj yazın"></div>
                            <div class="col-sm-1 mt-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
    `
    
    const messageArea = document.querySelector(".message-area");
    const yaziGiris = document.getElementById("yaziGiris");
    
    yaziGiris.addEventListener("keypress", function (e){
        if(e.key === "Enter"){
        let pEl = document.createElement("p");
        let zaman = document.createElement("span");
        let checkTick = document.createElement("span");
        let divEl = document.createElement("div");
        
        divEl.setAttribute("class", "divElclass");
        
        let date = new Date();
        let d = date.getHours()+ ':' + date.getMinutes();
        console.log(d)
        zaman.innerHTML = d;
        checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            
        let tickTimeout = setTimeout(myfunc,2000);
        function myfunc(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        let tickTimeout2 = setTimeout(myfunc2,3000);
        function myfunc2(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0099ff" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }

        pEl.innerHTML = yaziGiris.value;
        console.log(yaziGiris.value)
        
        divEl.append(zaman);
        divEl.append(checkTick);
        const part1 = divEl.insertBefore(pEl,divEl.firstChild);
        
        const part2 = messageArea.insertBefore(divEl,messageArea.firstChild);
    
        part2.insertBefore(part1,part2.firstChild);
        
        
        yaziGiris.value = "";
    
    }})
}

person3.addEventListener("click", islem3)

function islem3(){
    rightSide.innerHTML=`
    <img class="profil-pic rounded-circle" src="./images/pic5.jpg" alt="">
    <span class="ms-3">Cem</span>
    <span class="float-end mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </span>
    `;
    chatArea.innerHTML=`
                    <div class="message-area">
                       
                    </div>
                    <div class="chat-input-area">
                        <div class="row">
                            <div class="col-sm-1 mt-4 ms-5">
                                <span class="d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-sm-9 mt-3"><input id="yaziGiris" type="text" class="form-control"
                                    placeholder="bir mesaj yazın"></div>
                            <div class="col-sm-1 mt-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
    `
    
    const messageArea = document.querySelector(".message-area");
    const yaziGiris = document.getElementById("yaziGiris");
    
    yaziGiris.addEventListener("keypress", function (e){
        if(e.key === "Enter"){
        let pEl = document.createElement("p");
        let zaman = document.createElement("span");
        let checkTick = document.createElement("span");
        let divEl = document.createElement("div");
        
        divEl.setAttribute("class", "divElclass");
        
        let date = new Date();
        let d = date.getHours()+ ':' + date.getMinutes();
        console.log(d)
        zaman.innerHTML = d;
        checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            
        let tickTimeout = setTimeout(myfunc,2000);
        function myfunc(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        let tickTimeout2 = setTimeout(myfunc2,3000);
        function myfunc2(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0099ff" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }

        pEl.innerHTML = yaziGiris.value;
        console.log(yaziGiris.value)
        
        divEl.append(zaman);
        divEl.append(checkTick);
        const part1 = divEl.insertBefore(pEl,divEl.firstChild);
        
        const part2 = messageArea.insertBefore(divEl,messageArea.firstChild);
    
        part2.insertBefore(part1,part2.firstChild);
        
        
        yaziGiris.value = "";
    
    }})
}

person4.addEventListener("click", islem4)

function islem4(){
    rightSide.innerHTML=`
    <img class="profil-pic rounded-circle" src="./images/pic1.jpg" alt="">
    <span class="ms-3">Cansu</span>
    <span class="float-end mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </span>
    `;
    chatArea.innerHTML=`
                    <div class="message-area">
                       
                    </div>
                    <div class="chat-input-area">
                        <div class="row">
                            <div class="col-sm-1 mt-4 ms-5">
                                <span class="d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-sm-9 mt-3"><input id="yaziGiris" type="text" class="form-control"
                                    placeholder="bir mesaj yazın"></div>
                            <div class="col-sm-1 mt-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
    `
    
    const messageArea = document.querySelector(".message-area");
    const yaziGiris = document.getElementById("yaziGiris");
    
    yaziGiris.addEventListener("keypress", function (e){
        if(e.key === "Enter"){
        let pEl = document.createElement("p");
        let zaman = document.createElement("span");
        let checkTick = document.createElement("span");
        let divEl = document.createElement("div");
        
        divEl.setAttribute("class", "divElclass");
        
        let date = new Date();
        let d = date.getHours()+ ':' + date.getMinutes();
        console.log(d)
        zaman.innerHTML = d;
        checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            
        let tickTimeout = setTimeout(myfunc,2000);
        function myfunc(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        let tickTimeout2 = setTimeout(myfunc2,3000);
        function myfunc2(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0099ff" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }

        pEl.innerHTML = yaziGiris.value;
        console.log(yaziGiris.value)
        
        divEl.append(zaman);
        divEl.append(checkTick);
        const part1 = divEl.insertBefore(pEl,divEl.firstChild);
        
        const part2 = messageArea.insertBefore(divEl,messageArea.firstChild);
    
        part2.insertBefore(part1,part2.firstChild);
        
        
        yaziGiris.value = "";
    
    }})
}

person5.addEventListener("click", islem5)

function islem5(){
    rightSide.innerHTML=`
    <img class="profil-pic rounded-circle" src="./images/pic4.jpg" alt="">
    <span class="ms-3">Fatma</span>
    <span class="float-end mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-three-dots-vertical mx-3" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </span>
    `;
    chatArea.innerHTML=`
                    <div class="message-area">
                       
                    </div>
                    <div class="chat-input-area">
                        <div class="row">
                            <div class="col-sm-1 mt-4 ms-5">
                                <span class="d-flex flex-row justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-sm-9 mt-3"><input id="yaziGiris" type="text" class="form-control"
                                    placeholder="bir mesaj yazın"></div>
                            <div class="col-sm-1 mt-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                        class="bi bi-mic-fill" viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
    `
    
    const messageArea = document.querySelector(".message-area");
    const yaziGiris = document.getElementById("yaziGiris");
    
    yaziGiris.addEventListener("keypress", function (e){
        if(e.key === "Enter"){
        let pEl = document.createElement("p");
        let zaman = document.createElement("span");
        let checkTick = document.createElement("span");
        let divEl = document.createElement("div");
        
        divEl.setAttribute("class", "divElclass");
        
        let date = new Date();
        let d = date.getHours()+ ':' + date.getMinutes();
        console.log(d)
        zaman.innerHTML = d;
        checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>`;
            
        let tickTimeout = setTimeout(myfunc,2000);
        function myfunc(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }
        let tickTimeout2 = setTimeout(myfunc2,3000);
        function myfunc2(){
            checkTick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0099ff" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
        </svg>`;
        }

        pEl.innerHTML = yaziGiris.value;
        console.log(yaziGiris.value)
        
        divEl.append(zaman);
        divEl.append(checkTick);
        const part1 = divEl.insertBefore(pEl,divEl.firstChild);
        
        const part2 = messageArea.insertBefore(divEl,messageArea.firstChild);
    
        part2.insertBefore(part1,part2.firstChild);
        
        
        yaziGiris.value = "";
    
    }})
}