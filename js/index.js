window.addEventListener('DOMContentLoaded', function(){
$('.set').hide();
$('.kakunin').hide();
$('.syanai').hide();

$("#btn_set").click(function() {
    // 表示する
    $(".set").show();
    $(".kakunin").hide();
});

$("#btn_check").click(function() {
    // 表示する
    $(".kakunin").show();
});

$("#btn_qr").click(function() {
    // 表示する
    $(".syanai").show();
});

});

