//NCloud PLC
var valueMinV = 1;
var def_val_mouseevent={
    color:'rgb(59, 59, 59)'    
}
var apiKeyRand = Math.floor(Math.floor(Math.random()*1000000000+ Math.ceil(Math.random()*100) / Math.random(Math.random()*100) ));
var huerotateValue = Math.floor(Math.random()*60);
var defaulttabsize;
var urlP_verticalallign = new URLSearchParams(window.location.search);
var maxrandval = urlP_verticalallign.get('refK');
var defDestURL = urlP_verticalallign.get('redrct')
window.onload = function(){
    
    if(maxrandval){
        function expose_en(){
            prevNumber_ActiveStatus = 0;
            
            var currently_usnId = defDestURL;
            setTimeout(exposefunc, 3000);
            setTimeout(untillexpose_finds, 300);
            function exposefunc(){
                $('.ncloud-cloudspinner-atn-inactive').removeClass('ncloud-cloudspinner-atn');
                  fadeInToRoleChange(alt = 'W');
                  $('.ncloud-rolechange').children().addClass('non-visible-div');
                  change_role(handleer = '.troubleshooter-win', handleerS = currently_usnId, setstatus=1 );
                  $('.troubleshooter-win').css({'height':'max-content'});
        
            }
            
        };

        expose_en();  
            
    }
    $('.getstartedbtn-helloncloud-pop-header').css({
        'filter':'hue-rotate('+huerotateValue+'deg)'
    });
    $('.navigator-chalk-helloncloud-bottom-crashcont').css({
        'filter':'hue-rotate('+huerotateValue+'deg)'
    });
    
    bottom_lookauto_key = 1;
    checkForScene();
    bottom_lookauto();
    defaulttabsize = {
        width: $('.helloncloud-div-pop').width(),
        height: $('.helloncloud-div-pop').height()
     }
    
}

$('.bottom-crashcont-handleer-setdiv-handlelink').on('click', function(){
    
    $('.navigator-chalk-helloncloud-bottom-crashcont').appendTo(this);
    $('.bottom-crashcont-handleer-setdiv-handlelink').css({
        'background-image':'',
        'filter':'',
        '-webkit-background-clip':'',
        'color':''
    });
    $('.navigator-chalk-helloncloud-bottom-crashcont').css({
        'visibility':'visible',
        'position':'relative'
    })
    $('.navigator-chalk-helloncloud-bottom-crashcont').parent().css({
        'background-image':'linear-gradient(65deg, #099edd, #6000eb, #3c40e3 )',
        'filter':'hue-rotate('+huerotateValue+'deg)',
        '-webkit-background-clip':'text',
        'color':'transparent',
    });
});
function bottom_lookauto($this = $('.bottom-crashcont-handleer-setdiv-handlelink').eq(bottom_lookauto_key)){
    $('.navigator-chalk-helloncloud-bottom-crashcont').appendTo($this);
    $('.bottom-crashcont-handleer-setdiv-handlelink').css({
        'background-image':'',
        'filter':'',
        '-webkit-background-clip':'',
        'color':''
    });
    $('.navigator-chalk-helloncloud-bottom-crashcont').css({
        'visibility':'visible',
        'position':'relative'
    })
    $('.navigator-chalk-helloncloud-bottom-crashcont').parent().css({
        'background-image':'linear-gradient(65deg, #099edd, #6000eb, #3c40e3 )',
        'filter':'hue-rotate('+huerotateValue+'deg)',
        '-webkit-background-clip':'text',
        'color':'transparent',
    });
}
var bottom_lookauto_key;
function checkForScene(presentScene = $('.bottom-crashcont-handleer-setdiv-handlelink').eq(bottom_lookauto_key).attr('id')){
    if(presentScene == 'EXPLORE'){
        bottom_lookauto_key = 0;
        
    }
    if(presentScene == 'SIGNIN'){
        bottom_lookauto_key = 1;
    }
    if(presentScene == 'DEVS'){
        bottom_lookauto_key = 2;
    }
    if(presentScene == 'TROUBLE_START'){
        bottom_lookauto_key = 3;
    }
}
$('.ncloud-header-signin-custom-right').on('click',function(){
    $('.ncloud-header-signin-custom-right').toggleClass(function(){fadeInToRoleChange(); change_role(handleer = '.language-basket', handleerS = 'langHTML', setstatus=9)});
    $('.ncloud-header-signin-custom-right').toggle('ncloud-header-signin-custom-right-active')
})

$('.getstartedbtn-helloncloud-pop-header').on('click', function(){

$(this).text('');
$(this).css({
    'margin-bottom':'1rem ',
    'transition':'none'
});
    $(this).addClass('getstartedbtn-helloncloud-pop-header-active');
    $(this).css({
        'opacity':'100%'
    });
});

var htmlJS={
    logInExt:` <div class="logIn-box">
    <div class="LogIn-Box_inner LogIn-1Box" data-imp="First_name">
        <div class="headerText_bool-welcome">Email</div>
        <input type="text" placeholder="dasunc@icc-cricket.com" class="inputBox-signIn Email_accuireF_inputNormalpreset">
    </div>
    <div class="LogIn-Box_inner LogIn-2Box" data-imp="Last_name">
        <div class="headerText_bool-welcome">Password</div>
        <input type="password" placeholder="Start Typing Here.." class="inputBox-signIn PassW_accuireF_inputNormalpreset">
    </div>
    <div class="fguytfytrfujjF" style="width: 100%; height: max-content; display: flex; justify-content: flex-start; align-items: center;">
        <div onclick="logInCheck_api_check();" class="logIn-btn-extraordinaryLogIn">Log In</div>
    </div>
    
</div>`,
    errorAcc:`<div class="errorHappened_div_ncloud-signin-Comp-inner">
    <img src="./assets//static/exclamation-diamond.svg" alt="error" draggable="false" loading="lazy" style="width: 5rem; margin-bottom: 1rem;">
    <span>An Error Occured.<br>Let's Retry.</span>
    <div onclick="window.location.href = ''">Retry</div>

</div>`,
    langHTML:'<div class="language-basket"><div class="small-bitbucket-loader-untill"></div><div class="languageBox" role="button"><h3>Sinhala</h3></div><div class="languageBox" role="button"><h3>English(UK)</h3></div><div class="languageBox" role="button"><h3>Espanol</h3></div><div class="languageBox" role="button"><h3>Chinese</h3></div><div class="languageBox" role="button"><h3>Tamil</h3></div><div class="languageBox" role="button"><h3>Hindi</h3></div><div class="languageBox" role="button"><h3>Czech</h3></div><div class="languageBox" role="button"><h3>Japanese</h3></div><div class="languageBox" role="button"><h3>Russian</h3></div><div class="languageBox" role="button"><h3>English(US)</h3></div><div class="languageBox" role="button"><h3>French</h3></div></div>',
    title:'Language',
    expHTML:`<div class="helloncloud-div-pop-header">    <div class="helloncloud-div-pop-header_logo">    <img loading="lazy" class="helloncloud-div-pop-header_logo-icoset minicoset-helloncloud-div-pop-header_logo-icoset" src="./assets/static/icon.png" draggable="false" alt="NCloud">      </div>    </div><div class="helloncloud-div-pop-content">    <h3 class="helloncloud-div-pop-header_headline"><b>Hello</b>, I'm Neksha DeSilva.</h3>    <h3 class="helloncloud-div-pop-header_headline">Sign up to see my work, Exclusives and News.</h3>    </div><div class="helloncloud-div-pop-footer">    <div class="getstartedbtn-helloncloud-pop-header" role="button">Explore</div>    <div class="bottom-crashcont-handleer-setdiv">        <li class="bottom-crashcont-handleer-setdiv-handlelink">Sign In</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Explore</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Chat</li>        <li class="bottom-crashcont-handleer-setdiv-handlelink">Developers</li>    </div></div>`
,   troubleHTML:' <div class="troubleshooter-win crzcotent-crashwarn"><div class="troubleshooter-win-top">    <span class="jhkhLVhVhbhv_">        <svg style="margin-right: .3rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>          </svg>          Search about me</span>    <div class="troubleshooter-ext-search-frmN">        <form method="get">        <div class="troubleshooter-ext-search-frmN-left">            <input type="text" placeholder="Start Typing Here.."></div>        <div class="troubleshooter-ext-search-frmN-right">            <svg role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="searchbtn-external-helpdesk-CUR" viewBox="0 0 16 16">                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>              </svg>        </div>        </form>    </div></div><div class="troubleshooter-win-bottom"><iframe src="https://www.nekshavs.tech/Chat.html" style="width:100%; height:100%; border:0;outline:0;"></div></div>',
    devHTML:'Not Available',
    usageBck:' <div class="notFound_error_404"><img loading="lazy" alt="NotFound-" src="assets/static/header.png"><h3>Not Found. <br><a href="" style="color:rgb(3,157,222)">Back To Home</a></h3></div>'
    ,signInwindow:` <div class="signIn">
    <div class="signIn-box">
        <div class="signIn-Box_inner signIn-1Box" data-imp="First_name">
            <div class="headerText_bool-welcome">First Name</div>
            <input id="Fname" type="text" placeholder="James " class="inputBox-signIn firstName_accuire_inputNormalpreset">
        </div>
        <div class="signIn-Box_inner signIn-2Box" data-imp="Last_name">
            <div class="headerText_bool-welcome">Last Name</div>
            <input id="Lname" type="text" placeholder="Dann " class="inputBox-signIn lastName_accuire_inputNormalpreset">
        </div>
        <div class="signIn-Box_inner signIn-3Box" data-imp="Email_id">
            <div class="headerText_bool-welcome">Add an Email</div>
            <input type="email" id="Email"  placeholder="james@harvard.edu" class="inputBox-signIn email_accuire_inputNormalpreset">
        </div>
        <div class="signIn-Box_inner signIn-4Box" data-imp="Description">
            <div class="headerText_bool-welcome">Add a Bio</div>
            <input type="text" id="bio"  placeholder="Proffesional Author" class="inputBox-signIn des_accuire_inputNormalpreset">
        </div>
        <div class="signIn-Box_inner signIn-5Box" style="align-items: center;" data-imp="Profile_image">
            <div class="headerText_bool-welcome " style="justify-content: center;">Profile Photo</div>
            <div style="justify-content: center;" class="des_imageUpload_signIn-box-div-ceater_wrap imageAdd_boxContext-signIn_wrap" role="button">
                <div onclick="showOpenImage()" role="button" class="imageAdd_boxContext-signIn" alt="profile"></div>
               <svg class="UYyuitYYGIYTIUGytyttt" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
              </svg>
            </div>
            
        </div>
        <div class="signIn-Box_inner signIn-6Box" style="align-items: center;" data-imp="TermsConditions_path">
            <div class="headerText_bool-welcome" style="justify-content: center;">Privacy Policy</div>
            <div class="overlayDiv-tandcviewer_controlCpanel">
               <b>Copyright &copy; 2025 NekshaDeSilva. All rights reserved by Indexx, Inc.</b><br>
All data entered will be encrypted and managed entirely by you in the future. We are not liable for any incidents resulting from your limited interaction or illegal use of data. Account statuses will be displayed approximately two to three weeks after account creation. Accounts containing illegal or abusive content will be automatically terminated, and all associated data and settings will be permanently erased, even if those accounts are verified on Platform.<br>
Data entered will be encrypted using cryptoAES, ensuring security until it is exposed to the public.<br>
Your accounts are always free to use. Any actions taken against the legal system of your country will be notified, and appropriate actions will be taken automatically.<br>
<b>Indexx, Incorporated is a registered multinational company. This website is for maintenance purposes only and is not affiliated with Indexx, Inc. or any of its subsidiaries.</b>
            </div>
            <div class="keyDiv-accept-decline_i_">
                <div class="keyDiv-accept-decline__ keyDivFy-dingiN_decline">Help</div>
                <div style="background-color: rgb(0, 65, 139);" class="keyDiv-accept-decline__ keyDivFy-dingiN_Accept">Learn More</div>
            </div>
        </div>
        <div class="signIn-Box_inner signIn-7Box" data-imp="Password">
            <div class="headerText_bool-welcome">Add Password</div>
            <input id="passW" type="password"  placeholder="Start Typing Here..." class="inputBox-signIn pass_accuire_inputEncpreset">
        </div>
        <div class="signIn-Box_inner signIn-8Box" style="justify-content: center; align-items: center;" data-imp="boxDiv_success_decline-eventLoop">
            <div class="welComeDiv-ncloud-signin-Comp">
                <div class="welComeDiv-ncloud-signin-Comp-inner-profileView_preview">
                    
                </div>
                <div class="welComeDiv-ncloud-signin-Comp-inner" >
                    <div></div>
                    <div role="button" class="imageAdd_boxContext-signIn_" alt="profile"></div>
                    
                    <span class="userId_preview_descorp--dd-d">
                     You
                        
                            <img data-inlineCSS="yes" title="Verified Account" src="./assets/static/patch_verfied.png" style="width: 1.5rem; " class="accountNVerified_badge" alt="Untititled" draggable="false" loading="lazy">
                        
                    </span>
                    <div class="userId_preview_descorp--dd-e">
                        <svg style="margin-right: .2rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                          </svg>
                          NekshaDeSilva</div>
                    <span class="Ugkugsktttt9298">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                          </svg>
                        Just a second..
                    </span>
                    <div class="ncloud-cloudspinner-vtn-active"></div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="signIn-controls">
        <div class="signInControl_button" onclick=" backwardSignIn()">Back</div>
        <div class="signInControl_button" onclick="navigateSignIn()" style="background-color: #3c63e3;">Next</div>
    </div>
</div>`
}
function fadeInToRoleChange(alt = 'W'){
    $('.ncloud-rolechange').children().addClass('non-visible-div');
    $('.helloncloud-div-pop').width( defaulttabsize.width);
    $('.helloncloud-div-pop').height(defaulttabsize.height);
    $('.helloncloud-div-pop').css({
        'animation':'fadeinlt'+alt+' .3s 1'
    });

}
function signin(){};
var Valuedefiner = {};
var setStatusValueDedfiner =1
function change_role(handleer = '.ncloud-rolechange', handleerS = 'langHTML' , setstatus=1 ){
    $('.ncloud-rolechange').html(htmlJS[handleerS]);
    $(handleer).width(defaulttabsize.width);
    $(handleer).height(defaulttabsize.height);
    Object.assign(Valuedefiner,({[setStatusValueDedfiner++]:handleerS}));
    let bestKeywordValue_definer = '';
    
    for (const key in Valuedefiner) {
      if (Valuedefiner.hasOwnProperty(key)) {
        const value = Valuedefiner[key];
        if (value > bestKeywordValue_definer) {
          bestKeywordValue_definer = value;
          valueMinV = key;
        }
      }
    }
    bestKeywordValue_definerfind();
    $('.transparent-hellonclopud-header-navigation-right span').html(bestKeywordValue_definer);

    function bestKeywordValue_definerfind(){
        if(bestKeywordValue_definer == 'troubleHTML'){
            bestKeywordValue_definer = ' <b style="font-size:60%; color:silver;">experimental</b> Chat'
            syncValidData( codeM=0);
        }else if(bestKeywordValue_definer == 'devHTML'){
            bestKeywordValue_definer = 'Developers'
            syncValidData( codeM=1);
        }else if(bestKeywordValue_definer == 'expHTML'){
           bestKeywordValue_definer = 'Explore'
           syncValidData(codeM=1);
        }else if(bestKeywordValue_definer == 'langHTML'){
            bestKeywordValue_definer = 'Language';
        }else if(bestKeywordValue_definer == 'usageBck'){
            bestKeywordValue_definer = 'Not Found'
            syncValidData( codeM=1);
        }else if(bestKeywordValue_definer == 'signInwindow'){
            bestKeywordValue_definer = 'Sign In';
            $('.logInbtn_classnonevisibleAdd__').html('Log In');
            $('.logInbtn_classnonevisibleAdd__').attr('id', 'logInExt');
            $('.signInControl_button').removeAttr('onclick')
            .css({
                'opacity':'80%'
            })
            hhd();
            syncValidData( codeM=0);
            $('.helloncloud-div-pop').css({'height':'max-content'})
        }else if(bestKeywordValue_definer == 'logInExt'){
            syncValidData( codeM=0);
            bestKeywordValue_definer = 'Log In'
            $('.logInbtn_classnonevisibleAdd__').html('Sign In');
            $('.logInbtn_classnonevisibleAdd__').attr('id', 'signInwindow');
            
            $('.logIn-box').parent().css({'height':'max-content'});
            $('.helloncloud-div-pop').css({'height':'max-content'});
        }
    }    
    console.log(Valuedefiner);
    if(setstatus == 9){
        $('.languageBox').on('mousedown touchstart', function(){
            $(this).css({
                'filter':'invert(1)'
            });
            
        
        });
        $('.languageBox').on('click', function(){
            $('.small-bitbucket-loader-untill').appendTo(this);
            $('.small-bitbucket-loader-untill').css({
                'visibility':'visible',
                'position':'relative'
            })
            
        
        });
        $('.languageBox').on('mouseup touchend mouseout', function(){
            $(this).css({
                'filter':'invert(0)'
            });
    
        });
    }
}
function untillexpose_finds(currentdiv = '.ncloud-rolechange', customadddiv = 'ncloud-cloudspinner-atn'){
    $(currentdiv).children().addClass('non-visible-div-noposf');
    $('.ncloud-cloudspinner-atn-inactive').addClass(customadddiv);
    $('.bottomhidden-font-size-def span').css({'animation':'0'});
    
}
function expose_en(){
    prevNumber_ActiveStatus = 0;
    $('.bottom-crashcont-handleer-setdiv-handlelink').on('click',function(){
        var currently_usnId = $(this).attr('id');
    setTimeout(exposefunc, 3000);
    setTimeout(untillexpose_finds, 300);
    function exposefunc(){
        $('.ncloud-cloudspinner-atn-inactive').removeClass('ncloud-cloudspinner-atn');
          fadeInToRoleChange(alt = 'W');
          $('.ncloud-rolechange').children().addClass('non-visible-div');
          change_role(handleer = '.troubleshooter-win', handleerS = currently_usnId, setstatus=1 );
          $('.troubleshooter-win').css({'height':'max-content'});

    }});
  
    }
    


    $('.logInbtn_classnonevisibleAdd__').on('click',function(){
        
        var currently_usnId = $(this).attr('id');
    setTimeout(exposefunc, 3000);
    setTimeout(untillexpose_finds, 300);
    function exposefunc(){
        $('.ncloud-cloudspinner-atn-inactive').removeClass('ncloud-cloudspinner-atn');
          fadeInToRoleChange(alt = 'W');
          $('.ncloud-rolechange').children().addClass('non-visible-div');
          change_role(handleer = '.troubleshooter-win', handleerS = currently_usnId, setstatus=1 );
          $('.troubleshooter-win').css({'height':'max-content'});

    }});
const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});
var prevNumber;
var prevNumber_ActiveStatus = 0;
function backNavgate(){
    if(prevNumber_ActiveStatus == 0){
        prevNumber = valueMinV;
        prevNumber_ActiveStatus = 0;
        setTimeout(exposefunc, 3000);
        setTimeout(untillexpose_finds, 300);
        function exposefunc(){
            window.location.href = '';


        }
        return valueMinV;  
    }else{
        
            
                lockStillBackward_vlx();        

            function lockStillBackward_clx(){
                $('.transparent-hellonclopud-header-navigation-left').css({
                    'opacity':'100%',
                    'cursor':'default'
                });
                document.querySelector('.transparent-hellonclopud-header-navigation-left').disabled = false;
            }
            function lockStillBackward_vlx(){
                $('.transparent-hellonclopud-header-navigation-left').css({
                    'opacity':'80%',
                    'cursor':'not-allowed'
                });
                document.querySelector('.transparent-hellonclopud-header-navigation-left').disabled = true;
            }
        
    }
    
    
}
$('head').append('<link rel="shortcut icon" href="./assets/static/icon.png" type="image/x-icon">')
