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




