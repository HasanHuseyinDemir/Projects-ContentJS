__screenControls=(mode)=>{
    __mode=mode;
    
    if(__x==0){
        __x=parseInt(__screen.value);
    }else{
        if(__y==0){
            __y=parseInt(__screen.value);
        }else{
            switch(mode){
            case "<sup>POW</sup>":__x=Math.pow(__x,__y);break;
            case "%":__x=__x%__y;break;
            case "/;":__x=__x/__y;break;
            case "*":__x=__x*__y;break;
            case "-":__x=__x-__y;break;
            case "+":__x=__x+__y;break;
            }
           __y=0;
        }
    }
    __screen.value=0;
    mode=="AC"?(__x=0,__y=0,__mode="",__screen.value=0):"";
    set("page");
}