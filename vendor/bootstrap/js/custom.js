function add_check_cars() {
    var check_cars = document.getElementById('item1');
    if (!check_cars.checked) {
        $('#img_item1').addClass('icon-back');
        $("#img_check1").removeClass('d-none')
    }
    else {
        $('#img_item1').removeClass('icon-back');
        $('#img_check1').addClass('d-none');
    }
}
function add_check_rent() {
    var check_cars = document.getElementById('item2');
    if (!check_cars.checked) {
        $('#img_item2').addClass('icon-back');
        $("#img_check2").removeClass('d-none')
    }
    else {
        $('#img_item2').removeClass('icon-back');
        $('#img_check2').addClass('d-none');
    }
}
function add_check_property() {
    var check_cars = document.getElementById('item3');
    if (!check_cars.checked) {
        $('#img_item3').addClass('icon-back');
        $("#img_check3").removeClass('d-none')
    }
    else {
        $('#img_item3').removeClass('icon-back');
        $('#img_check3').addClass('d-none');
    }
}
function subscribe() {
    var user = {};
    var surname, name, second_name;
    surname = document.getElementById('surname').value;
    name = document.getElementById('name').value;
    second_name = document.getElementById('second_name').value;
    email = document.getElementById('email').value;
    var check_rent = document.getElementById('item1');
    var check_cars = document.getElementById('item2');
    var check_property = document.getElementById('item3');
    if (check_rent.checked) {
        check_rent.value = true;
    }
    else {
        check_rent.value = false;
    }
    if (check_cars.checked) {
        check_cars.value = true;
    }
    else {
        check_cars.value = false;
    }
    if (check_property.checked) {
        check_property.value = true;
    }
    else {
        check_property.value = false;
    }
    if (!check_cars.checked && !check_rent.checked && !check_property.checked) {
        check_cars.value = true;
        check_rent.value = true;
        check_property.value = true;
    }
    jQuery.post("https://tender.uub.com.ua/DataHandler.ashx?Com"
        + "&surname=" + encodeURIComponent(surname)
        + "&name=" + encodeURIComponent(name)
        + "&u_pass=" + encodeURIComponent(second_name)
        + "&email=" + encodeURIComponent(email)
        + "&cars=" + encodeURIComponent(check_cars.value)
        + "&rent=" + encodeURIComponent(check_rent.value)
        + "&property=" + encodeURIComponent(check_property.value)
        , HandleRegister);
}
