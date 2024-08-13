function show(selectedForm) {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'none';
    if (selectedForm) {
        document.getElementById(selectedForm).style.display = 'block';
    }
}
function closePopup(){
    document.getElementById("popup").style.display = 'none';
}
function showPopup(){
    document.getElementById("popup").style.display = 'flex';
}
function subForecast_show(value){
    if(value=='demonstration'){
        document.getElementById("demonstration-option").style.display='block';
        document.getElementById("otherForecast-option").style.display='none';
    }
    if(value=='otherForecast'){
        document.getElementById("otherForecast-option").style.display='block';
        document.getElementById("demonstration-option").style.display='none';
    }
    if (value==''){
        document.getElementById("otherForecast-option").style.display='none';
        document.getElementById("demonstration-option").style.display='none';
    }
}
function subOtherForecast_show(value){
    if(value=='others'){
        document.getElementById("otherForecastInput").style.display='block';
    }
    if (value==''){
        document.getElementById("otherForecastInput").style.display='none';
    }
}