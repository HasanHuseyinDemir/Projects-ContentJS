__itemsList={
    date:[
        {
            title:"İki tarih arasındaki gün hesaplama",
            src:`${__thisFolder}/calculations/date/between2dates.html`,
            
        },
        {
            title:"Yılın kaçıncı günü hesaplama",
            src:`${__thisFolder}/calculations/date/dayofyear.html`,
            
        },
        {
            title:"Burç hesaplama",
            src:`${__thisFolder}/calculations/date/astrology.html`,
        }
    ],
    height:[
        {
            title:"Metrekare Hesaplama",
            src:`${__thisFolder}/calculations/height/m2.html`,
            
        },
        {
            title:"İnç Hesaplama",
            src:`${__thisFolder}/calculations/height/inc.html`,
            
        },  
        {
            title:"Boy/Kilo Oranı Hesaplama (BMI)",
            src:`${__thisFolder}/calculations/height/bmi.html`,
            
        },
        {
            title:"Alan Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Hız Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Uzaklık Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },

    ],
    math:[
        {
            title:"Faktöriyel Hesaplama",
            src:`${__thisFolder}/calculations/math/dayofyear.html`,
            
        },
        {
            title:"Yüzde Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Oran Orantı Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Oran Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Rastgele Sayı Üretici",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Kombinasyon ve Permütasyon",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Karekök Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Binary Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Taban Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },

    ],
    finance:[
        {
            title:"Faiz Hesaplama",
            src:`${__thisFolder}/calculations/finance/dayofyear.html`,
            
        },
        {
            title:"Bahşiş Hesaplama",
            src:`${__thisFolder}/calculations/finance/dayofyear.html`,
            
        },
        {
            title:"Portfolyo Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        }
    ],
    string:[
        {
            title:"Karakter Sayısı Hesaplama",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Kelime Sayısı Hesaplama",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Sesli Harf Hesaplama",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Bulunan Kelime Hesaplama",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Kelime Bul ve Değiştir",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Tersten Yazıcı",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        },
        {
            title:"Büyük/Küçük Harf Düzenleyici",
            src:`${__thisFolder}/calculations/string/dayofyear.html`,
            
        }
    ],
    energy:[
        {
            title:"Kalori Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },        
        {
            title:"Sıcaklık Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Watt Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },        
        {
            title:"Yakıt Tüketimi Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
        {
            title:"Elektrik Tüketimi Hesaplama",
            src:`${__thisFolder}/calculations/height/dayofyear.html`,
            
        },
    ],
    colors:(category)=>{
        switch(category){
            case "date":return "bgpurple"
            case "height":return "bgcyan"
            case "math":return "bgorange"
            case "finance":return "bggold"
            case "string":return "bgyellowgreen"
            case "energy":return "bgred"
        }
    },
    render:(src)=>{
        content.render(src.toString(),'#__calculate',"$$")
    }
}



__getItemsList=()=>{
    return eval(`__itemsList.${__selectedCategory}`).map((item)=>{

        return `<div class="__listItem ${__itemsList.colors(__selectedCategory)}" onclick="__itemsList.render('${item.src}')">${item.title}</div>`
    }).join("");
}