//Copyrights (c) 2024 @NCloud PLC. All rights reserved.
var refid;
function signin(){
    untillexpose_finds();
    
}
function checkForValidityFR(fr){
       function checkFLogin(){
        const database = firebase.database();


function validateLogin(email, password) {

  database.ref().orderByChild('userData/Email').equalTo(email).once('value', snapshot => {
    if (snapshot.exists()) {
      snapshot.forEach(childSnapshot => {
        const userData = childSnapshot.val().userData;
        
        if (userData.passW === password) {
          previewProfileFill();
          function encryptDefKey(e){
            e= CryptoJS.AES.encrypt(userData.userKeyId, (maxrandval));
              console.log(e)

            setTimeout(function(){
                window.location.href = 'https://litha.pages.dev/?referenc='+e+'&rdrctid=sct5'

            },1000)
            return 
        }
          function previewProfileFill(){
            $('.ncloud-rolechange').html(`
      
            <div class="welComeDiv-ncloud-signin-Comp-inner">
            <div></div>
            <div role="button" class="imageAdd_boxContext-signIn_" alt="profile"></div>
            
            <span class="userId_preview_descorp--dd-d">
                <span>NCloud User</span>
                
            </span>
            <div class="userId_preview_descorp--dd-e">
                <svg style="margin-right: .2rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"></path>
                  </svg>
                  NekshaDeSilva</div>
            <span class="Ugkugsktttt9298">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path>
                  </svg>
                Just a moment..
            </span>
            <div class="ncloud-cloudspinner-vtn-active"></div>
        </div>
            `);
            gh();
        function gh(){
                 $('.userId_preview_descorp--dd-d span').html(userData.Fname + ' '+ userData.Lname);
                 $('.imageAdd_boxContext-signIn_').css({
                    'background-image':`url(`+userData.profileP+`)`

                 });
                 if(userData.accountStatus ==1){
                    $('.userId_preview_descorp--dd-d').append(`<img data-inlinecss="yes" title="Verified Account" src="./assets/static/patch_verfied.png" style="width: 1.5rem; "    class="accountNVerified_badge" alt="Untititled" draggable="false" loading="lazy">`)
                }
            
               
            }
               


            
          }
         
        encryptDefKey();
        } else {
            $('.ncloud-rolechange').html(htmlJS.errorAcc);
        }
      });
    } else {
        $('.ncloud-rolechange').html(htmlJS.errorAcc);
    }
  });
}

// Example usage: Validate login credentials
const email = userData.Email;
const password = userData.passW;

validateLogin(email, password);
    };
    function checkSignIn(){
      
        
        function gen(p,v){
                p = Math.floor(Math.random(Math.random()*99900)*70988770);
                v = p*Math.floor(Math.random()*6);
                refid =v;
                return v;
                

        }
        
        var database = firebase.database(); 
        userData.userKeyId = gen()+`NQ`;
        database.ref(userData.userKeyId).set({
        userData
    });
    checkFLogin();
 
    }
    if(fr==1){
        checkFLogin();
    }
    if(fr ==0){
        checkSignIn();

    }
    

  
}
    var nh = 1;
function navigateSignIn() {
    $('.signInControl_button').removeAttr('onclick')
    .css({
        'opacity':'80%'
    })

    function defineNh() {
        if (nh == 8) {
            nh = 8;
            console.log('dtabse')
            
            checkForValidityFR(fr = 0);
            
        } else {
            nh++;
        }
        
        return nh;
        
    }

    function h() {
        $('.signIn-Box_inner').css({
            'visibility': 'hidden',
            'position': 'fixed'
        });

        $('.signIn-' + defineNh() + 'Box').css({
            'visibility': 'visible',
            'position': 'relative'
        });
    }
    function ahdefine(){
        if(ah==1){
            $('.helloncloud-div-pop').css({
                'animation':'fadeinlt'+'W'+' .3s 1'
            });
            ah =0;
        }else{
            $('.helloncloud-div-pop').css({
                'animation':'fadeinlt'+'R'+' .3s 1'
            });
            ah=1;
            
        }
    }
    ahdefine()
    h();
    console.log(nh); // Log the current value of nh
    hhd();
}
var ah=1
function backwardSignIn() {
    
    function ahdefine(){
        if(ah==1){
            $('.helloncloud-div-pop').css({
                'animation':'fadeinlt'+'W'+' .3s 1'
            });
            ah =0;
        }else{
            $('.helloncloud-div-pop').css({
                'animation':'fadeinlt'+'R'+' .3s 1'
            });
            ah=1;
            
        }
    }
    ahdefine()
    function defineNh() {
        if (nh == 1) {
            nh = 1;
        } else {
            nh--;
        }
        
        return nh;
        
    }

    function h() {
        $('.signIn-Box_inner').css({
            'visibility': 'hidden',
            'position': 'fixed'
        });

        $('.signIn-' + defineNh() + 'Box').css({
            'visibility': 'visible',
            'position': 'relative'
        });
    }

    h();
    console.log(nh); // Log the current value of nh
}
function hhd(){
    if(nh==5){
       $('.imageAdd_boxContext-signIn').css({'background-image':"url("+userData.profileP+")"});  
       $('.signInControl_button').eq(1).attr('onclick', 'navigateSignIn()')
            $('.signInControl_button').eq(0).attr('onclick', 'backwardSignIn()')
            $('.signInControl_button')
            .css({
                'opacity':'100%'
            })
       console.log('success')
    }
    if(nh ==6){
        $('.signInControl_button').eq(1).attr('onclick', 'navigateSignIn()')
        $('.signInControl_button').eq(0).attr('onclick', 'backwardSignIn()')
        $('.signInControl_button')
        .css({
            'opacity':'100%'
        })
   console.log('success');
   
    }
    if (nh == 8) {
        nh = 8;
        console.log('dtabse')
        checkForValidityFR(fr = 0);
    }
    $('.inputBox-signIn').on('input' , function(fi='Fname'){
    
        fi = $(this).attr('id');
        var vf =$(this).val();
        console.log(fi +' '+vf)
        userData[fi]=  vf;
        if(!vf){
            $('.signInControl_button').removeAttr('onclick')
            .css({
                'opacity':'80%'
            })


        }else{
            $('.signInControl_button').eq(1).attr('onclick', 'navigateSignIn()')
            $('.signInControl_button').eq(0).attr('onclick', 'backwardSignIn()')
            $('.signInControl_button')
            .css({
                'opacity':'100%'
            })
        }
        
    })
}
function defineTheVerEmail_a(fg){
    fg= Math.floor((Math.random()*1000)*Math.random()*86);
    return fg;
}
var userData={
    userKeyId:NaN,
    Fname:'NCloud',
    Lname:'User',
    Email:defineTheVerEmail_a(),
    bio:'Bio',
    profileP: `data:image/jpeg;base64,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`,
    passW:`001`,
    accountStatus:0

}
async function showOpenImage(){
    const pickerOpts = {
    types: [
      {
        description: "Profile Image",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };
    [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    const file = await fileHandle.getFile();
    
    const reader = new FileReader();
    reader.onload = function(event) {
       
        const dataURL = event.target.result;

        userData.profileP = dataURL;
        
        
       
        hhd();
    } 
    reader.readAsDataURL(file);
}
function logInCheck_api_check(fg){
    var gqStatus=0;
    fg = $('.inputBox-signIn').val();
    setTimeout(function(){
        
        
       if(!fg){
        gqStatus =0;
       }else{
        gqStatus=1;
        userData.Email = $('.Email_accuireF_inputNormalpreset').val();
        userData.passW = $('.PassW_accuireF_inputNormalpreset').val();
        checkForValidityFR(fr=1);
       }
      $('.ncloud-rolechange').html(`
      
      <div class="ncloud-cloudspinner-vtn-active"></div>
`); checkForValidity();
    }, 300);
    var eq =0;
    
  function checkForValidity(){
    checkForValidityFR(fr = 1);
    if(gqStatus == 1){
        $('.ncloud-rolechange').html(`
      
        <div class="ncloud-cloudspinner-vtn-active"></div>
  `)
    }else{
        $('.ncloud-rolechange').html(htmlJS.errorAcc);

 }

}}