__getProject=(project)=>{

    switch(project){
        case "todo":
            __activeProject!==project?
            (
            content.render("./components/applications/todolist/index.html","page","todo"),
            document.body.style.backgroundColor="cyan",
            activeApp="Yapılacaklar Listesi",
            document.title="Yapılacaklar Listesi",
            set(),
            __activeProject=project
            )
            :"";
        break;

        case "calculator":
            __activeProject!==project?(
            content.render("./components/applications/calculator/index.html","page","calculator"),
            document.body.style.backgroundColor="lime",
            activeApp="Hesap Makinesi",
            document.title="Hesap Makinesi",
            set(),
            __activeProject=project
            ):"";
        break;

        case "variousCalculations":
            __activeProject!==project?(
            content.render("./components/applications/variousCalculations/index.html","page","various"),
            document.body.style.backgroundColor="yellow",
            activeApp="Çeşitli Hesaplamalar",
            document.title="Çeşitli Hesaplamalar",
            set(),
            __activeProject=project
            ):"";
        break;
    }
}