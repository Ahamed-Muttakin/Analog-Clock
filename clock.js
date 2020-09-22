setInterval(setClock,1000)
const hourHand= document.querySelector('[data-hour-hand]')
const minitHand= document.querySelector('[data-minit-hand]')
const secondHand= document.querySelector('[data-second-hand]')
function setClock(){
    const currentdate= new Date()
    const second=currentdate.getSeconds() / 60
    const minit=(second+currentdate.getMinutes()) / 60
    const hour=(minit+currentdate.getHours()) /12
    setRotation(secondHand,second)
    setRotation(minitHand,minit)
    setRotation(hourHand,hour)
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)

}
$('#clk').draggable();

