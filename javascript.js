var td = document.querySelectorAll('td')
//클로저
//이벤트가 실행되면 자동으로 파라미터가 생김 => event

for(i=0; i<td.length; i++){
    td[i].onclick = function() {
        var input = document.querySelector('input')
        // console.log(event.target.innerHTML) //value : <input> / innerHTML : text
        input.value = event.target.innerHTML
        
        input.a = "3"

        var obj = {
            name: '3'
        }
        obj.address = 'abcd'
    }
}
