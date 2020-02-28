var td = document.querySelectorAll('td')
var input = document.querySelector('input')
for(i=0; i<td.length; i++){
    td[i].onclick = function(e){
        // 버튼의 내용이 = 이면 기본 동작 취소
        // this = e.target
        // this = event.target(타겟자체가 속성)
        if(e.target.innerText == '=') {
            return
            //e.preventDefault()
        }
        input.value += e.target.innerHTML
        //질문) 원래의 value값인 0이 없어졌으면 좋겠다.
        // 위와 같은 말 
        // ac.onclick = function(){ input.value = "0"; }

        var b = document.querySelector('.a')
        var flag = false // 스위치변수 , 플래그변수
        // 부호를 클릭했다! 그러면 깃발을 올리고 true
        // 숫자를 클릭했다 그러면 깃발을 내리고 false        
        // if(e.target.hasClass('a')) {
            // 숙제: 연산자를 연속으로 클릭하지 못하도록
        if(isNaN(e.target.innerHTML)) { //isNaN : 숫자가 아니면  true/ false
            flag = true
        } else {
            flag = false
        }
    }
}
var ac = document.querySelector('.ac')
ac.addEventListener('click',function(){
    input.value = "0";
})
var result = document.querySelector('#result')
result.addEventListener('click',function(){
    //e.preventDefault()
    input.value = Number(eval(input.value))
    
})




