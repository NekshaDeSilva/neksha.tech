function checkinputValcls_(){
    function checkinputValcls(){
            $('.event__clear-rolebutton-input-chatbot').css({
                'visibility':'hidden'
            });
    }
  $('.chatbot-input').on('input', function(){
    splittedidentification();
    console.log(searchedObjects_bot.strings)
   if(!$(this).val()){
    $('.event__clear-rolebutton-input-chatbot').css({
        'visibility':'hidden'
    });
   }else{
    $('.event__clear-rolebutton-input-chatbot').css({
        'visibility':'visible'
    });
   }
   runningonHsvC();
   function runningonHsvC(){
    $('.event__clear-rolebutton-input-chatbot').on('click', function(){
        $('.chatbot-input').val('');
        checkinputValcls();
    });
   }
});  
}
checkinputValcls_();

function splittedidentification(){
    var fullString = $('.chatbot-input').val().toLowerCase();
    var processedStrings = fullString.split(' ');

    for (let i = 0; i < processedStrings.length; i++) {
        searchedObjects_bot.strings['string' + (i + 1)] = processedStrings[i]; 
      }
      
}
var searchedObjects_bot={
    strings:{}
}
function chatSend(createdElemt){
    $('.chatbot-div-content').append(
        createdElemt = $('<div/>')
          .addClass("chatbox-container-u")
          .append("<div class='chatbubble chatbox-container-uv'></div>")
      )
      createdElemt.children('div').text($('.chatbot-input').val());
      createdElemt.animate({
        opacity: 0.25,
      }, 100, function() {
        $(this).animate({
            opacity: 1
        })
        
      });
      createdElemt[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      $('.chatbot-input').val('');
    

}
 $('.sendbtn-chatbot-div').on('click', function(){
    if(!$('.chatbot-input').val()){
        //..
       }else{
        generateResponse();
        chatSend();
       }

    });
 
    function generateResponse() {
        const foundValues = {};
        
        for (const responseKeysR in searchedObjects_bot.strings) {
            const keyValueString_find = searchedObjects_bot.strings[responseKeysR];
    
            if (keyValueString_find in chatBotWords) {
                foundValues[responseKeysR] = chatBotWords[keyValueString_find];
                 const valueOfSearchedString1 = chatBotWords[keyValueString_find];
                const numberOfFoundValues = Object.keys(foundValues).length;
                setTimeout(pushMsgC, 300);
                function pushMsgC(){
                    pushMsg(value = valueOfSearchedString1); 
                }
            }
            else{
                
                Object.assign(chatBotWords,{[keyValueString_find] : "If You Want Any Further Help,<br>So Please Use Help Center.<br><a href='https://www.help.ncloud.com/?rdctr=12'>NCloud Help Forum</a>"});
            }
        }
       
       
    }
    
    function pushMsg(value){
        $('.chatbot-div-content').append(
            createdElemt = $('<div/>')
              .addClass("chatbox-container-b")
              .append("<div class='chatbubble chatbox-container-bv'></div>")
          )
          createdElemt.children('div').html(value);
          createdElemt[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          $('.chatbot-input').val('');
    }

    $(window).on('load', function(){
        if ( window.location !== window.parent.location ) {
            runningIniFrame();             

          } else {
            function nextStp(){
                $('.loading-banner-type-overflow-remove-instant_div-chatUx').remove();
            }
            nextStp();
          }
    });

    $('head').append('<link rel="shortcut icon" href="./assets/static/icon.png" type="image/x-icon">');