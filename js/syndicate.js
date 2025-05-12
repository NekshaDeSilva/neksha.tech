//NCloud Password Sync
//Copirights (c) 2023 @NCloud PLC
var apiKeyMax_val;
function securebootApiGen(){
  var fakeKey = window.atob('AIzaSyCNuDD4Eci4EN6TA2uRwxOx7NEaWrYPzC4');
  apiKeyMax_val = window.btoa(fakeKey);
  return apiKeyMax_val;
}
securebootApiGen();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrnabpig3g3NTwg1FczcnOiPuVyIxUQ-k",
  authDomain: "lithaq-nclx.firebaseapp.com",
  databaseURL: "https://lithaq-nclx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lithaq-nclx",
  storageBucket: "lithaq-nclx.appspot.com",
  messagingSenderId: "82810670890",
  appId: "1:82810670890:web:8792244cc769d941f0d853",
  measurementId: "G-2LJWW0Y022"
};
firebase.initializeApp(firebaseConfig);
function syncValidData(codeM){
  let ghssvg;
  let fDiv= '.bottomhidden-font-size-def';
  let str;
  if(codeM == 0){
    ghssvg = '<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>'
    str= 'Encrypted'
    
  }
  if(codeM ==1){
    ghssvg = '<path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>'
    str= 'Open'
  }
  replace_value_html();
  function replace_value_html(){
    $(fDiv + ' svg').html(ghssvg);
    $(fDiv + ' span').text(str)
    .css({'animation':'fDiv_leftToRigthFade_morph09_anim .2s linear 1'});
  }
  



}

var moreShwStatus_ = 0;

function moreShow_remove(){
  if(moreShwStatus_ ==1){
    
    $('.bottomhidden-menu-overflow-media-active').on('click', function(){
      $('.bottomhidden-invisible').removeAttr('style');
      $('.bottomhidden-font-size-def33').removeAttr('style');
      $('.bottomhidden-menu-overflow-media-active').removeAttr('style');
      $('.bottomhidden-left').removeAttr('style');
      $('.bottomhidden-right').removeAttr('style');
      
      $('.bottomhidden-font-size-def li').removeAttr('style');
      $('.bottomhidden-menu-overflow-media-active').animate().html('<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>');
      $('.bottomhidden-menu-overflow-media-active').addClass('bottomhidden-menu-overflow-media')
      $('.bottomhidden-menu-overflow-media').removeClass('bottomhidden-menu-overflow-media-active');
      $('.bottomhidden-font-size-def33').appendTo('.bottomhidden-right');
    console.log('success');
  moreShwStatus_ =0;
  });
}
  }
  
function moreShow(){
  if(moreShwStatus_ ==0){
    moreShwStatus_=1;
  $('.bottomhidden-menu-overflow-media').addClass('bottomhidden-menu-overflow-media-active');
 
      $('.bottomhidden-right').css({
          'max-width':'90%',
          'height':'max-content',
          'color':'rgb(230,230,230)',
          'display':'flex',
          'align-items':'center',
          'padding':'2% 0px 30%;',
          'padding-bottom':'4rem',
          'margin-top':'5%'
          
      
      });  
      $('.bottomhidden-left').css({
          'width':'90%',
          'display':'flex',
          'justify-content':'center',
          'align-items':'center'
      })

      $('.bottomhidden-invisible').css({
          'flex-direction':'column',
          'justify-content':'flex-start',
          '-webkit-backdrop-filter': 'blur(10px)',
          'backdrop-filter': 'blur(10px)',
          'background-color': 'rgba(24, 24, 24, 0.863)',
          'position': 'fixed'
      });
      $('.bottomhidden-font-size-def33').appendTo('.bottomhidden-right');
      $('.bottomhidden-font-size-def li').css({
          'visibility':'visible',
          'position':'relative',
      });
      $('.bottomhidden-font-size-def li').eq(1).css({
          'margin-right':'0'
      })
      $('.bottomhidden-menu-overflow-media').animate().html('<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>')

$('.bottomhidden-menu-overflow-media').css({
  'min-width':'1.5rem',
  'margin-left': '0.5rem'
});
$('.bottomhidden-font-size-def33').css({
  'height': 'max-content',
  'padding': '1% 2% 1% 2%',
  'border-radius':'var(--defborder-radius)',
  'width':'100%',
  'flex-wrap':' wrap',
  'justify-content': 'flex-end',
  'height': '4rem'
});
  console.log('done');
  $('.bottomhidden-menu-overflow-media').removeClass('bottomhidden-menu-overflow-media');
  moreShow_remove();
}
  

}


async function fileKeyOpen(){
  var [fileHandle] = await window.showOpenFilePicker({
    types:[
      {
        description:'GIF Files Not Allowed.',
        accept:{
          'image/*':['.py', '.png']
        }
      }
    ]
  });
  var fileData  = await fileHandle.getFile();
  let fileData_ = await fileData.text();
}
//fs access API

