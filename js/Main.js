$('#singers h3').click((e)=>{
    if($($(e.target).next()[0]).css('display')=='block'){
        $('#singers div').slideUp(1000);
    }
    else{
        $('#singers div').slideUp(1000);
        $($(e.target).next()[0]).slideToggle(1000);
    }
});


$('#main span').click(()=>{
    
    if($('#mySidenav').css('width') == '0px'){
        openNav();
    }
    else{
        closeNav();
    }
});

function openNav(){
    $('#mySidenav').css('width','250px')
    $('#main').css('margin-left','250px');
} 
$('.closebtn').click(closeNav)

function closeNav(){
    $('#mySidenav').css('width','0')
    $('#main').css('margin-left','0');
}

const textArea = $('form textarea');

textArea.keyup(()=>{
    const text = textArea.val();
    if(100-text.length > 0){
        $('#char').text(100-text.length)
    }
    else{
        $('#char').text('your available character finished')
    }

});


const eventDate = {
    month:3,
    day: 10,
    hour: 22 //8pm
}

setInterval(getRemainingDate, 1000);

function getRemainingDate(){
    const today = new Date();
    let remainingDays , remainingHours ,remainingMinutes ,remainingSeconds;
    if(today.getMonth()+1 == eventDate.month & today.getDate() == eventDate.day){
        remainingDays = 0;
        if(today.getHours() == eventDate.hour){
            
            remainingHours =0;
            remainingMinutes = 60-today.getMinutes();
            remainingSeconds = 60-today.getSeconds();
        }
        else if(today.getHours() < eventDate.hour){
            console.log('55');
            remainingHours = eventDate.hour - today.getHours();
            remainingMinutes = 60-today.getMinutes();
            remainingSeconds = 60-today.getSeconds();
        }

        else{
            remainingMinutes = 0;
            remainingSeconds = 0;
            remainingHours = 0;
        }
    }
    else{
        remainingMinutes = 60-today.getMinutes();
        remainingSeconds = 60-today.getSeconds();
        remainingHours = eventDate.hour - today.getHours();

        //if(today.getHours() > eventDate.day)
        if(today.getMonth()+1 < eventDate.month){
            remainingDays = (30-today.getDate())+eventDate.day;
            console.log(30-today.getDate());
        }
        else{
            remainingDays = eventDate.day-today.getDate();
            
        }
    }
    


    $('#days').text(remainingDays)
    $('#hours').text(remainingHours);
    $('#minutes').text(remainingMinutes)
    $('#seconds').text(remainingSeconds)
} 









