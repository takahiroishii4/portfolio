// ityped

jQuery(document).ready(function($){
  ityped.init(document.querySelector("#ityped"), {
        showCursor: true,
        strings: ['Takahiro.', 'a UX designer.', 'Japanese.', 'a calligrapher.', 'a HCI researcher.', 'a student.', 'ONCE.', 'Takahiro.'],
        //     typeSpeed: 55, //default
        //     //表示する時のスピード
        //     backSpeed: 30, //default
        //     //戻る時のスピード
        //     startDelay: 500, //default
        //     //スタート時の遅延時間
             backDelay: 500, //default
        //     //戻る時の遅延時間
             loop: false, //default
        //     //ループの有無
        //     showCursor: true, //default
        //     //カーソル表示の有無
             cursorChar: " |", //default
        //     //カーソルの形状
        //     onFinished: function(){}
      })
});
