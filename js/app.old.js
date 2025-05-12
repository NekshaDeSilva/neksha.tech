var def_val_mouseevent={
    color:'rgb(59, 59, 59)'    
}
$('.bottomhidden-menu-overflow-media').on('mousedown touchstart', function(){
$(this).css({
    'background-color':def_val_mouseevent.color
});
});
$('.bottomhidden-menu-overflow-media').on('click', function(){
    
});
$('.bottomhidden-menu-overflow-media').on('mouseup touchend mouseout', function(){
    $(this).css({
        'background-color':''
    });
});
var langbasketprevW;
var langbasketprevH;
var huerotateValue = Math.floor(Math.random()*100);
window.onload = function(){
    $('.getstartedbtn-helloncloud-pop-header').css({
        'filter':'hue-rotate('+huerotateValue+'deg)'
    });
    langbasketprevW = $('.helloncloud-div-pop').width();
    langbasketprevH = $('.helloncloud-div-pop').height();
}
var langjs={
    sourceHTML:'<div class="language-basket"><div class="languageBox" role="button"><h3>Sinhala</h3></div><div class="languageBox" role="button"><h3>English(UK)</h3></div><div class="languageBox" role="button"><h3>Espanol</h3></div><div class="languageBox" role="button"><h3>Chinese</h3></div><div class="languageBox" role="button"><h3>Tamil</h3></div><div class="languageBox" role="button"><h3>Hindi</h3></div><div class="languageBox" role="button"><h3>Czech</h3></div><div class="languageBox" role="button"><h3>Japanese</h3></div><div class="languageBox" role="button"><h3>Russian</h3></div><div class="languageBox" role="button"><h3>English(US)</h3></div><div class="languageBox" role="button"><h3>French</h3></div></div>',
    title:'Language',
    sourceHTMLP:'<div class="helloncloud-div-pop-header">    <div class="helloncloud-div-pop-header_logo">        <img loading="lazy" class="helloncloud-div-pop-header_logo-icoset" src="./assets/static/beatmaax-hd-ico.png" draggable="false" alt="beatMaax">        <img loading="lazy" class="helloncloud-div-pop-header_logo-icoset minicoset-helloncloud-div-pop-header_logo-icoset" src="./assets/static/icon.png" draggable="false" alt="NCloud">        <img loading="lazy" class="helloncloud-div-pop-header_logo-icoset" src="./assets/static/GreetMake_logo_tab.png" draggable="false" alt="greetmake">    </div>    </div><div class="helloncloud-div-pop-content">    <h3 class="helloncloud-div-pop-header_headline"><b>Hello</b>, This Is Way To In.</h3>    <h3 class="helloncloud-div-pop-header_headline">Sign up for more than 500+ Ncloud apps and more.</h3>    </div><div class="helloncloud-div-pop-footer">    <div class="getstartedbtn-helloncloud-pop-header" role="button">Explore</div>    <div class="bottom-crashcont-handleer-setdiv">        <li class="bottom-crashcont-handleer-setdiv-handlelink">Sign In</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Explore</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Troubleshoot</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Developers</li>    </div></div>'
}

var langBoxPrev_s = 0;
var rolechange_while_fdDiv_title = 'fadeinltR'
function rolechangeFd(){
    $('.ncloud-rolechange').css({
       'animation': rolechange_while_fdDiv_title+' .5s 1' 
    });
}
var currentlyHappeningTex_trnsprntlkk;
var curentlyhandelingmainContRole ='.language-basket';
function langBox(){

    if(langBoxPrev_s == 0){
        langBoxPrev_s = 1;
        rolechange_while_fdDiv_title = 'fadeinltR';
        rolechangeFd();
        $('.ncloud-rolechange').html(langjs.sourceHTML);
        $(curentlyhandelingmainContRole).width(langbasketprevW);
        $(curentlyhandelingmainContRole).height(langbasketprevH);
        currentlyHappeningTex_trnsprntlkk = menuwidgetdata.lng
    }else{
        langBoxPrev_s = 0;
        $('.ncloud-rolechange').html(langjs.sourceHTMLP);
        rolechange_while_fdDiv_title = 'fadeinltW'
        rolechangeFd();
        currentlyHappeningTex_trnsprntlkk = menuwidgetdata.exp
        
    }
    

}
var langnameaftersubmitted;

function langsubmitE(){
    rolechange_while_fdDiv_title = 'fadeinltR';
    rolechangeFd();
}
$('.languageBox').on('click', function langsubmit(){
    langsubmitE();
    langnameaftersubmitted = $(this).attr('id');
    langBoxPrev_s = 0;
    $('.ncloud-rolechange').html(langjs.sourceHTMLP);
    rolechange_while_fdDiv_title = 'fadeinltW'
    rolechangeFd();
    currentlyHappeningTex_trnsprntlkk = menuwidgetdata.lding
});
var menuwidgetdata  = {
    exp:'Explore',
    signin:'Sign In',
    lng:'Lanugage',
    err:'Error',
    dev:'Developers',
    trouble:'Troubeshooting',
    lding:'Wait..'
}
setInterval(function(){
$('.transparent-hellonclopud-header-navigation-right').text(currentlyHappeningTex_trnsprntlkk);
},100);


