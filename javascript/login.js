// 課題3 ~jQueryで作成~ モーダルウインドウ表示
$(function(){
  // 新規登録ボタンクリックで、モーダルを表示
  let contener = $('.modalContainer');
  $('#signup').on('click', function(){
    contener.addClass('show');
    $('body').addClass('modalNoScroll');
    return false; // モーダル枠外クリック用
  });

  // ×ボタンクリックで、モーダル消す
  $('.modalClose').on('click', function(){
    contener.removeClass('show');
    $('body').removeClass('modalNoScroll');
  });
  // モーダル枠外をクリックしてもモーダル消す
  $(document).on('click', function(e) {
    if(!$(e.target).closest('#modalContent').length){
      contener.removeClass('show');
      $('body').removeClass('modalNoScroll');
    }
  });

  
  //「新規登録」ボタンを押した時に
  //もしid,pass,pass確認用のvalueが空でない場合
  //かつpass=pass確認用の場合、「登録できました」とアラートする
  //1つでも空の場合は「未入力の項目があります」と表示させる
  let id = $('#signup_login_id').val();
  let pass = $('#signup_pass').val();
  let passConfirm = $('#signup_pass_confirm').val();
  $('#signUp').on('click', function(){
    if(id == ''){
      alert('idが入力されてない');
    } else if(pass == passConfirm) {
      alert('入力できました');
    }
  });
  
});