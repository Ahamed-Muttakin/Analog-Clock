function showDate(){
    let date=new Date();
    let dd=date.getDate();
    let mm=date.getMonth()+1;
    let yy=date.getFullYear();
    if(dd<10)
        document.getElementById("dd").textContent="0"+dd;
    else
        document.getElementById("dd").textContent=dd;
    if(mm<10)
        document.getElementById("mm").textContent="0"+mm;
    else
        document.getElementById("mm").textContent=mm;
    document.getElementById("yy").textContent=yy;
    
}
showDate();

