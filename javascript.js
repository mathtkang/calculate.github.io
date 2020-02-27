var td = document.querySelectorAll('td')
for(i=0; i<td.length; i++){
    td[i].onclick = function(){
        var input = document.querySelector('input')
        input.value += event.target.innerHTML
    //질문) 원래의 value값인 0이 없어졌으면 좋겠다.

    var ac = document.querySelector('.ac')
    ac.addEventListener('click',function(){
            input.value = "0";
    })
    // 위와 같은 말 : ac.onclick = function(){ input.value = "0"; }

    }
    //질문)여기에 넣어도 작동합니다! 어디에 넣어야하나요?
    // var ac = document.querySelector('.ac')
    // ac.addEventListener('click',function(){
    //     // var input = document.querySelector('input')
    //     // 질문) 변수 input은 'onclikck 함수'안에서 정의된 지역변수이니까 
    //     // 여기서는 undefined되어야하는것 아닌가용?
    //         input.value = "0";
    // })
}
//질문)여기에 넣어도 작동합니다! 어디에 넣어야하나요?
var ac = document.querySelector('.ac')
    ac.addEventListener('click',function(){
        var input = document.querySelector('input')
            input.value = "0";
    })



