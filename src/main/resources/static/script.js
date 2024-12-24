/*
var stompClient=null;

function connect()
{
let socket=	new SockJS("/server1")

stompClient = Stomp.over(socket);

stompClient.connect({},function(frame){
	
console.log("Connected :"+frame)	
	
$("#name-from").addClass('d-none')
$("#chat-room").removeClass('d-none').addClass('mb-4');


// subscribe


stompClient.subscribe("/topic/return-to",function(response){
	
	
	
showMessage(JSON.parse(response.body))	
	
	
}
)
	
})

}


//show message

function showMessage(message)
{

   $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)

}

//send message



function sendMessage(){


 let jsonOb={
     name:localStorage.getItem("name"),
     content:$("#message-value").val()
 }

 stompClient.send("/app/message",{},JSON.stringify(jsonOb));



}







$(document).ready((e) => {
    // Ensure the "login" button and "name-value" input field exist
    if ($("#login").length && $("#name-value").length) {

        // Handle click event for the login button
        $("#login").click(() => {
            let name = $("#name-value").val();

            // Check if connect function is defined before calling it
            if (typeof connect === "function") {
                connect();
            } else {
                console.error("connect() function is not defined.");
            }

            // Store name in localStorage
            localStorage.setItem("name", name);
        });

    } else {
        console.error("Elements with IDs 'login' and/or 'name-value' not found.");
    }
});

*/



var stompClient=null



   function sendMessage(){


    let jsonOb={
        name:localStorage.getItem("name"),
        content:$("#message-value").val()
    }

    stompClient.send("/app/message",{},JSON.stringify(jsonOb));



   }



function connect()
{

        let socket=new SockJS("/server1")

        stompClient=Stomp.over(socket)

        stompClient.connect({},function(frame){

            console.log("Connected : "+frame)

            $("#name-from").addClass('d-none')
              $("#chat-room").removeClass('d-none')


                //subscribe
                stompClient.subscribe("/topic/return-to",function(response){

                        showMessage(JSON.parse(response.body))

                })



        })

}


 function showMessage(message)
 {

    $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)

 }





$(document).ready((e)=>{


   $("#login").click(()=>{


       let name=$("#name-value").val()
       localStorage.setItem("name",name)
       $("#name-title").html(`Welcome , <b>${name} </b>`)
       connect();


   })

   $("#send-btn").click(()=>{
    sendMessage()
	
	
	$("#message-value").val('');
   })

$("#logout").click(()=>{

    localStorage.removeItem("name")
    if(stompClient!==null)
    {
        stompClient.disconnect()

         $("#name-from").removeClass('d-none')
         $("#chat-room").addClass('d-none')
         console.log(stompClient)
    }

})

})







