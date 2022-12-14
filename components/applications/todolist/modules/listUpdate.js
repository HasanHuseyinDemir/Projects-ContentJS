__listUpdate = {
    get: () => {
        let title = document.querySelector("#__title");
        let details = document.querySelector("#__details");
        let importance = document.querySelector("#__importances");
        let titleValue = title.value;
        let detailsValue = details.value;
        let importanceValue = importance.value;
        __listUpdate.add(titleValue, detailsValue, importanceValue);
        __listUpdate.clear(title, details, importance);
    },
    add: (titleValue, detailsValue, importanceValue) => {
        if (titleValue) {
            let item = { key: Math.floor(Math.random() * 1000000), title: titleValue, details: detailsValue, importance: importanceValue,completed:false };
            __list.push(item);
        } else {
            alert("Başlık Girmelisiniz!");
        }
    },
    clear: (title, details, importance) => {
        title.value = "";
        details.value = "";
        importance.value = 0;
        set("page");
    },
    getList: () => {
        if(__list[0]){
            return __list.map((item) => {
            return (`
            <div id="__importance${item.importance}">
            <input type="checkbox" class="__checkbox" onclick="__listUpdate.checked(${item.key})" ${item.completed?"checked":""}>
            <div>
            <h3 class="${item.completed?'__checkedItem':''}" style="display:flex;justify-content:space-between">${item.title} <span style="color:gray;cursor:pointer;" onclick="__listUpdate.delete(${item.key})">&#10006;</span></h3>
            <p class="${item.completed?'__checkedItem':''}">${item.details}</p>
            </div>
            </div>
            `)
        }).join("");
    }else{
        return `Liste Boş`
    }
    },
    getFiltered:()=>{
        if(__filter){
            return __filtered.map((item) => {
            return (`
            <div id="__importance${item.importance}">
            <input type="checkbox" class="__checkbox" onclick="__listUpdate.checked(${item.key})" ${item.completed?"checked":""}>

            <div>
                <h3 class="${item.completed?'__checkedItem':''}" style="display:flex;justify-content:space-between">${item.title} <span style="color:gray;cursor:pointer;" onclick="__listUpdate.delete(${item.key})">&#10006;</span></h3>
            <p class="${item.completed?'__checkedItem':''}">${item.details}</p>
            </div>
            </div>
            `)
        }).join("");
    }},
    checked:(key)=>{
        let keys=key;
        __list.map((objs)=>{
            if(objs.key.toString()==key.toString()){
                objs.completed=!objs.completed;
            }
        })
        set("page");
    },
    getCompleted:()=>{
        let completed=0;
        __list.map((item)=>{
            item.completed?completed++:"";
        })
        return completed;
    },
    filter:{
        get:(condition)=>{
            let list = __list;
            switch(condition){
                case "impAscend":
                    __filtered=[];
                    __filtered=__list.sort((a,b)=>b.importance-a.importance);
                    
                ;break;
                case "impDescend":
                    __filtered=[];
                    __filtered=__list.sort((a,b)=>a.importance-b.importance);    
                ;break;
                case "urgent":__filtered=__list.filter((item)=>{return item.importance>3});break;
                case "completed":__filtered=__list.filter((item)=>{return item.completed===true});break;
                case "incompleted":__filtered=__list.filter((item)=>{return item.completed===false});break;
            }
        }
    },
    delete:(key)=>{
        __list=__list.filter((item)=>{return item.key!==key});
        __listUpdate.filter.get(__filter);
        set("page");
    }
}