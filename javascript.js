var td = document.querySelectorAll('td')
var input = document.querySelector('input')
var flag = false
var resultCheck = false
for(i=0; i<td.length; i++){
    td[i].onclick = function(e){
        if(e.target.innerText == '=') {
            return  // 기본동작 취소는 preventDefault! 
                    // 함수 종료는 return!
        }
        if(isNaN(e.target.innerText)==false){ //isNaN : 숫자가 아니면 true/ 숫자면 : false 
            if (input.value == "0" || resultCheck == true){
                input.value = e.target.innerHTML
                resultCheck = false
            }else{
                input.value += e.target.innerHTML
            }
            flag = false
        }else{
            if(flag == false){
                input.value += e.target.innerHTML
                flag = true
            }        
        }
    }
}
var ac = document.querySelector('.ac')
ac.addEventListener('click',function(){
    input.value = "0";
})

var result = document.querySelector('#result')
result.addEventListener('click',function(){
    if(flag == true){
        return
    }
    input.value = Number(eval(input.value)) //eval() : (안에있는 숫자,부호) 알아서 계산해줌
    resultCheck = true
    
})




