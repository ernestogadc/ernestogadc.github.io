/* Syntaxis de Jquery    $("selector").accion    */

$(function () {
    const style = document.documentElement.style
    let idcoutner = 0;
    let editing = '';
    $("#btn").click(function () {
        /*  Creating a note */
        if ($("#btn").text() === "Create Note") {
            if ($("#input").val() === '') {
                alert("ingresa una nueva nota");
            } else {
                idcoutner++
                $("#list").append("<div id='item_" + idcoutner + "'>" +
                    "<p>" + $("#input").val() + "</p>" +
                    "<button class='listo' " + ">Done!</button>" +
                    "<button class='edit' " + ">Edit</button>"
                    + "</div>");
                if ($("input:checked").val() === "very") {
                    $("#item_" + idcoutner).addClass("very");
                } else if ($("input:checked").val() === "important") {
                    $("#item_" + idcoutner).addClass("important");
                } else {
                    $("#item_" + idcoutner).addClass("reminder");
                }
                $("#input").val('');
            }
        } else {
            /* Edditing an existing note  */
            $("#" + editing + " > p").text($("#input").val());
            $("#" + editing).removeClass();
            if ($("input:checked").val() === "very") {
                $("#" + editing).addClass("very");
            } else if ($("input:checked").val() === "important") {
                $("#" + editing).addClass("important");
            } else {
                $("#" + editing).addClass("reminder");
            }
            $("#input").val('');
            $("#btn").text("Create Note");


        }
    });
    /* Delete a note */
    $("body").on('dblclick', '#list div .listo', function () {
        $(this).closest("div").remove();
    });

    /* Access edition of a note */
    $("body").on('click', '#list div .edit', function () {
        $("#input").val($(this).siblings("p")[0].textContent)
        $("#btn").text("Update Note");
        editing = $(this).closest('div').attr('id');
        if ($('#' + editing).hasClass("very")) {
            $("#very").prop("checked", true);
        } else if ($('#' + editing).hasClass("important")) {
            $("#important").prop("checked", true);
        } else {
            $("#reminder").prop("checked", true);

        }
    });




    $("#tema").click(function () {
        if (style.getPropertyValue("--background") === "#e5e5e5") {
            style.setProperty("--background", "#002c29");
            style.setProperty("--reminder", "#005d8c");
            style.setProperty("--very-important", "#fc6f00");
            style.setProperty("--impotant", "#ffd75a");
            style.setProperty("--light", "#ffffcd");


        } else {
            style.setProperty("--background", "#e5e5e5");
            style.setProperty("--reminder", "#B8DFD8");
            style.setProperty("--very-important", "#FFB319");
            style.setProperty("--importan", "#FFE194");
            style.setProperty("--light", "#191919");


        }

    });
});



/* document.documentElement.style.cssText = "--main-background-color: red";
:root {
    --background: #002c29;
    --reminder: #005d8c;
    --very-important: #fc6f00;
    --important: #ffd75a;
    --light: #ffffcd;
    --primary-font: 'Dongle', sans-serif;
    --secondary-font: 'Quicksand', sans-serif
}

.color1 {color: #4a1e04;}
.color2 {color: }
.color3 {color: #ff3781;}
.color4 {color: #ffbd5a;}
.color5 {color: #fffb7d;} */


/* $( "input" ).on( "click", function() {
    $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
  }); */