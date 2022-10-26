__getProject=(project)=>{

    switch(project){
        case "todo":
            __activeProject!==project?
            (
            content.render("./components/applications/todolist/index.html","page","todo"),
            __activeProject=project
            )
            :"";
        break;

        case "calculator":
            __activeProject!==project?(
            content.render("./components/applications/calculator/index.html","page","calculator"),
            __activeProject=project
            ):"";
        break;

        case "variousCalculations":
            __activeProject!==project?(
            content.render("./components/applications/variousCalculations/index.html","page","various"),
            __activeProject=project
            ):"";
        break;
    }
}