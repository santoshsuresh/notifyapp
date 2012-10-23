var socket = io.connect("http://192.168.1.3:3000");
socket.on("news",function(data){
    console.log(data);
//    alert(data);
});




$(document).ready(function(){
    $("#send").click(function(){
       console.log("Sending...")
       var data = $("#msg").val();
       socket.emit("message1",{name:'Message',data:data});
        $("#msg").val("");
    });

    socket.on("data",function(data){
//        alert(data.name);
//        $("#messageArea").html(JSON.stringify(data));
        var source = $("#template").html();
        var template = Handlebars.compile(source);
        var message = template(data);
        $("#offerData").html(message);
        window.location.hash = "modalBox";
    })
});