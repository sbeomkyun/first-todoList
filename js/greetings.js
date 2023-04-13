// const loginFoam = document.getElementById("login-foam");
// console.log(loginFoam); // html에서 login-foam이라는 id를 가진 elemnet 출력
// const loginInput = loginFoam.querySelector("input");
// console.log(loginInput); // html에서 login-foam안에서 input 이라는 elemnet 출력
// const loginButton = loginFoam.querySelector("button");
// console.log(loginButton); // html에서 login-foam안에서 button 이라는 elemnet 출력

// 위 내용을 더 짧게 코딩하려면 
//loginFoam 에 html안에 있는 login-foam을 넣지말고 
//quertyselector(#... element) 사용

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//중복된 string을 저장할 떄 일종의 관습 중요하지 않은 정보를 넣을때 사용하므로 대문자로 작성한다

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    const username = loginInput.value;
    // localStorage.setItem = (username, loginInput.value);
    localStorage.setItem(USERNAME_KEY, username);
    //localStorage.setItem("Key",value) 값 저장하기
    //localStorage.getItem("Key") value 값 불러오기
    //localStorage.removeItem("Key") value 값 삭제하기
    // greeting.innerText = "Hello " + username;
    // 물결에 있는 `` 백팁사용
    // greeting.innerText = "Hello " + 변수명;
    // greeting.innerText = `Hello ${변수명}`; 는 동일하다 
    painGreeting();
}

function painGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);    
    greeting.innerText = `안녕하세요 ${username}님`;    
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    painGreeting();
}
