
//弹框延迟
function timer() {
    setTimeout(function () {
        $('.bg_model').fadeOut();
        $('.modal_content').fadeOut();
    }, 2000)
}
//手机号验证
function checkPhone() {
    var phone = $('input[name=phone]').val();
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        return false;
    }
    return true;
}