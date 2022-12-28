$(document).ready(function () {
    $("#count-sum").click(function () {
        let suma = 0;
        $(".salary").each(function () {
            suma += parseInt($(this).text());
        });
        $("#sum").empty().append(suma);
    })
});

