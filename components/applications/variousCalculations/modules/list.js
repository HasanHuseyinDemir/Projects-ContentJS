__itemsList={
    date:[
        {
            title:"İki tarih arasındaki gün hesaplama",
            src:`${__thisFolder}/date/between2dates.html`,
            selected:false
        },
        {
            title:"Yılın kaçıncı günü hesaplama",
            src:`${__thisFolder}/date/dayofyear.html`,
            selected:false
        }
    ],
    height:[],
    math:[],
    finance:[],
    string:[],
    colors:(category)=>{
        switch(category){
            case "date":return "bgpurple"
            case "height":return "bgcyan"
            case "math":return "bgorange"
            case "finance":return "bggold"
            case "string":return "bgyellowgreen"
        }
    }
}



__getItemsList=()=>{
    return eval(`__itemsList.${__selectedCategory}`).map((item)=>{
        return `<div class="__listItem ${__itemsList.colors(__selectedCategory)}">${item.title}</div>`
    }).join("");
}
__getItemsList();