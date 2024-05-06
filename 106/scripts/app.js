function saveTask()
{
    console.log("saving tasks");
    //get values
    const title = $("#inputTitle").val();
    const desc = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();    
    console.log(title, desc, color, date, status, budget);
    //build an object
    
   

    //save to the sever
   

    //display the task
  
  
}



function init() {
    //load data  
    //retrive data
    //hook events
    $("#btnSave").click(saveTask);//this is usign jQuery
   
    
}

window.onload = init;
