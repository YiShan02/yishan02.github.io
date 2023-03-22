function AllowDrop(event) {
    event.preventDefault();
    setTimeout(function(){
        calculate('calculate');
    },1000);
}

function AllowDrop2(event,num) {
    if($("#Box"+num).find("input").length > 0){
        //
    }else{
        event.preventDefault();
        setTimeout(function(){
            calculate('calculate');
        },1000);
        
    }
}

function Drag(event) {
    event.dataTransfer.setData("text", event.currentTarget.id);
}

function Drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
}

function calculate(form_name){
    var form = new FormData($('#'+form_name)[0]);
    $.ajax({
        url: "./calculate.php",
        cache: false,
        contentType: false, //必選
        processData: false, //必選	
        data:form,
        type:"POST",
        dataType: "html",		
        success: function(rtn){
            $('#total').val(rtn);
        }
    });
}