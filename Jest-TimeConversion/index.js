
function time(milisec){

    let com=milisec;
    let ms=milisec%1000;
    com=(com-ms)/1000;
    let sec=com%60;
    com=(com-sec)/60;
    let min=com%60
    let hr=(com-min)/60


    if(milisec<1000){
        return ms+" milliseconds"
    }
    else if(milisec<60000){

        return sec+" seconds "+ms+" milliseconds"
    }
    else if(milisec<3600000){

        return min+" minute "+sec+" seconds "+ms+" milliseconds"
    }
    else{

        return hr+" hours "+min+" minute "+sec+" seconds "+ms+" milliseconds"
    }

}

module.exports=time