__equals=()=>{
    if(__mode&&__x&&__y){
        if(__mode!="<sup>POW</sup>"){
            __x=eval(`parseInt(__x)${__mode}parseInt(__y)`);
        }else{
            __x=Math.pow(__x,__y);
        }

        __y=0;
    }else if(__mode&&__x&&__screen.value){
        if(__mode!="<sup>POW</sup>"){
        __x=eval(`parseInt(__x)${__mode}parseInt(__screen.value)`);
        }else{
            __x=Math.pow(__x,__screen.value);
        }
    }
    __screen.value=0
    set("page");
}