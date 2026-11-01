var span = document.getElementById("number")
var count = 0
function increment(){
    count++
    span.innerText= count
}
function decrement(){
    if(count === 0){
        return
    }
    count--
    span.innerText= count
}
   
function resetNumber(original){
    count = original
    span.innerText = count
}