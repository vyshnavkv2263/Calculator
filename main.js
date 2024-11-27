function displayContent(content){
    display.value += content
}
function clearContent(){
    display.value = " "
}
function removeLastElement(){
    display.value=display.value.slice(0,-1)
}
function answer(){
    display.value=eval(display.value)
}