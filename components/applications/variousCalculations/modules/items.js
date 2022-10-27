__thisFolder="./components/applications/variousCalculations";
__selected="Hesaplamalar";
__items=[
    {
        title:"Tarih",
        color:"purple",
        src:`${__thisFolder}/date/index.html`,
        image:`${__thisFolder}/icons/time.png`,
        selected:true
    },
    {
        title:"Boyut",
        color:"cyan",
        src:`${__thisFolder}/size/index.html`,
        image:`${__thisFolder}/icons/height.png`,
        selected:false
    },
    {
        title:"Matematik",
        color:"orange",
        src:`${__thisFolder}/math/index.html`,
        image:`${__thisFolder}/icons/math.png`,
        selected:false
    },
    {
        title:"Finans",
        color:"gold",
        src:`${__thisFolder}/finance/index.html`,
        image:`${__thisFolder}/icons/finance.png`,
        selected:false
    },
]
__selectItem=(index)=>{
    __items.map((item)=>{
        item.selected=false;
    })
    __items[index].selected=true;
    __selected=__items[index].title+" Hesaplamaları";
    set();
}
__getItems=()=>{
    return (__items.map((item,index)=>{
        return`
        <div class="__item ${item.selected?"__itemSelected":''} bg${item.color}" onclick="__selectItem(${index}),set('page')">
        <img  src="${item.image}"/>
        <br>
        <span>${item.title}</span>
        </div>
        
        `
    }).join(""))
}