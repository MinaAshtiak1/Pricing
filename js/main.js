var m3adlElrowatb = document.getElementById('m3adl-elrowatb');
var adadSa3at;
var appearTklofaAlsa3a = document.getElementById('appear-tklofa-alsa3a');
var appearTklofaAlsa3aClick = document.getElementById('appear-tklofa-alsa3a-click');
var appearTklofaToba4ra = document.getElementById('appear-tklofa-moba4ra');
var appearTklofaToba4raClick = document.getElementById('appear-tklofa-moba4ra-click');
var appearTklofa5erMoba4ra = document.getElementById('appear-tklofa-5er-moba4ra');
var appear5tora = document.getElementById('appear-5tora');
var appearNha2e = document.getElementById('appear-nha2e');
var s3atM4ro3 = document.getElementById('s3at-m4ro3');
var check = 1;
appearTklofaAlsa3aClick.addEventListener("click", funcy);

function funcy() {
    if (document.getElementById('m3adl-elrowatb').value > 1000000000 ||
        document.getElementById('yomin').value > 24 ||
        document.getElementById('ahrin').value > 31 ||
        document.getElementById('m3adl-elrowatb').value < 0 ||
        document.getElementById('yomin').value < 0 ||
        document.getElementById('ahrin').value < 0 ||
        document.getElementById('m3adl-elrowatb').value === "" ||
        document.getElementById('yomin').value == "" ||
        document.getElementById('ahrin').value == ""
    ) {
        appearTklofaAlsa3a.textContent = "هناك خطأ في ادخال البيانات";
        s3atM4ro3.setAttribute("disabled", true);
        appearTklofaToba4ra.textContent = "هناك خطأ في ادخال البيانات";
        appearTklofa5erMoba4ra.textContent = "هناك خطأ في ادخال البيانات";
        appear5tora.textContent = "هناك خطأ في ادخال البيانات";
        appearNha2e.textContent = "هناك خطأ في ادخال البيانات";
        appearTklofaToba4raClick.style.display = "none";
    } else if ((isNaN((parseInt(document.getElementById('m3adl-elrowatb').value) * 100)) == true) ||
        (isNaN((parseInt(document.getElementById('yomin').value) * 100)) == true) ||
        (isNaN((parseInt(document.getElementById('ahrin').value) * 100)) == true)
    ) {
        appearTklofaAlsa3a.textContent = "هناك مشكلة في نوع البيانات";
        s3atM4ro3.setAttribute("disabled", true);
        appearTklofaToba4ra.textContent = "هناك مشكلة في نوع البيانات";
        appearTklofa5erMoba4ra.textContent = "هناك مشكلة في نوع البيانات";
        appear5tora.textContent = "هناك مشكلة في نوع البيانات";
        appearNha2e.textContent = "هناك مشكلة في نوع البيانات";
        appearTklofaToba4raClick.style.display = "none";

    } else {
        s3atM4ro3.removeAttribute("disabled");
        appearTklofaToba4raClick.style.display = "inherit";
        adadSa3at = (document.getElementById('yomin').value * document.getElementById('ahrin').value);
        appearTklofaAlsa3a.textContent = " $ " + (m3adlElrowatb.value / adadSa3at).toFixed(2);
        s3atM4ro3.value = "";
        appearTklofaToba4ra.textContent = "ادخل عدد ساعات المشروع";
        appearTklofa5erMoba4ra.textContent = "ادخل عدد ساعات المشروع";
        appear5tora.textContent = "ادخل عدد ساعات المشروع";
        appearNha2e.textContent = "ادخل عدد ساعات المشروع";
    }
}

appearTklofaToba4raClick.addEventListener("click", function() {

    if (s3atM4ro3.value > 1000000 || s3atM4ro3.value < 0 || s3atM4ro3.value == "") {
        appearTklofaToba4ra.textContent = "هناك خطأ في ادخال البيانات";
        appearTklofa5erMoba4ra.textContent = "هناك خطأ في ادخال البيانات";
        appear5tora.textContent = "هناك خطأ في ادخال البيانات";
        appearNha2e.textContent = "هناك خطأ في ادخال البيانات";
    } else if ((isNaN((parseInt(s3atM4ro3.value) * 100)) == true)) {
        appearTklofaToba4ra.textContent = "هناك مشكلة في نوع البيانات";
        appearTklofa5erMoba4ra.textContent = "هناك مشكلة في نوع البيانات";
        appear5tora.textContent = "هناك مشكلة في نوع البيانات";
        appearNha2e.textContent = "هناك مشكلة في نوع البيانات";

    } else {
        var x = (s3atM4ro3.value * (m3adlElrowatb.value / adadSa3at).toFixed(2));
        var y = (s3atM4ro3.value * (m3adlElrowatb.value / adadSa3at).toFixed(2)) * (60 / 100);
        var z = (s3atM4ro3.value * (m3adlElrowatb.value / adadSa3at).toFixed(2)) * (25 / 100);
        var f = x + y + z;
        appearTklofaToba4ra.textContent = " $ " + x;
        appearTklofa5erMoba4ra.textContent = " $ " + y.toFixed(2);
        appear5tora.textContent = " $ " + z.toFixed(2);
        appearNha2e.textContent = x + " + " + y.toFixed(2) + " + " + z.toFixed(2) + " = " + " $ " + f;
    }

});


document.getElementById('aml-7wr').onclick = function() {
        document.getElementById('m5fe').classList.toggle('hiddens');
    }
    // ((parseInt(document.getElementById('m3adl-elrowatb').value) * 100) == NaN)