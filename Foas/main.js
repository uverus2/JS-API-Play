$(function() {

    let typeOfQuote = " ";
    let quoteValue = " ";


    $('.say-click').on('click', function() {


        $('.hide-form').show();
        typeOfQuote = $(this).attr('quote-type');
        quoteValue = $(this).attr('quote-value');
        $('#form').attr('form-ajax-value', quoteValue)
        $("#results").text(" ");

        let $formFieldVictim = $("#exampleInputVictim");

        if (typeOfQuote === ":from") {

            $formFieldVictim.val("Not Applicable").attr('readonly', true);


        } else if (typeOfQuote === ":from&:name") {
            $formFieldVictim.attr('readonly', false);
        }

        console.log(quoteValue);


        // grab the data value
    });


    $('#close').on('click', function(e) {
        e.preventDefault();
        $('.hide-form').hide();
    });

    $('#generate').on('click', function(e) {
        e.preventDefault();

        let $nameInput = $('#exampleInputName').val();
        let $victimInput = $('#exampleInputVictim').val();
        let $formValue = $('#form').attr('form-ajax-value');

        console.log($nameInput);
        console.log($victimInput);
        console.log($formValue);

        let urlAttachment;

        if ($victimInput === "Not Applicable") {
            urlAttachment = $formValue + $nameInput;
        } else {
            urlAttachment = $formValue + $victimInput + "/" + $nameInput;
        }


        const siteURL = "https://www.foaas.com/";

        const url = siteURL + urlAttachment;

        console.log(url);

        $.ajax({
            url: url,
            method: "GET",
            dataType: 'text',
            success: function(data) {

                    console.log(data)
                    const firstPart = data.split("-")[0];
                    const seoncdPart = data.split("-")[1];
                    const buildIt = ` ${firstPart}  <span id="here"> From </span> - ${seoncdPart}`


                    $("#results").html(buildIt);



                } // ends callback

        }); // End of $.ajax

        $('.hide-form').hide();
        $('.show-element').show()

    });


    $("select").on("change", function() {
        const changingKeyWord = $("select").val();
        $("#here").text(changingKeyWord);
    });



});