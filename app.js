
// calculator

function getValue(e){
    var a = document.getElementById('result')
    a.value +=e
}
function calculator(){
    var a = document.getElementById('result')
    var val = a.value
    var fainal = eval(val)
    a.value =fainal

}
function clearvalue(){
    var a =document.getElementById('result')
    a.value = ""
}
function colorChange(){
    var a = document.getElementById('btton','result')
    a.className='color'
    
}
function out(){
    var a = document.getElementById('btton' )
    a.className='out'

}
