$(function() {

    $('#metrics').on('click', function() {

        $('.imperial-fields').hide()

        $('.metrics-fields').show()

        $('#inInput').val('');
        $('#lsbInput').val('');
        $('#result').html('');


    });

    $('#imperial').on('click', function() {

        $('.metrics-fields').hide()
        $('.imperial-fields').show()
        $('#cmInput').val('');
        $('#kgInput').val('');
        $('#result').html('');


    });

    $('#reset').on('click', function() {
        $('#result').html('');
        $('#cmInput').val('');
        $('#kgInput').val('');
        $('#inInput').val('');
        $('#lsbInput').val('');
        $('.all').hide();
    });




    let BMI = "";




    function metricBMICalc(cmInput, kgInput) {
        BMI = kgInput / (cmInput / 100 * cmInput / 100);
        return BMI
    }

    function imperialBMICalc(inInput, lsbInput) {
        BMI = lsbInput * 703 / inInput ** 2;
        return BMI
    }


    $('#form').on('submit', function(event) {
        event.preventDefault();

        if ($('.metrics-fields').is(':visible')) {
            console.log("True");

            let cmInput = $('#cmInput').val();

            let kgInput = $('#kgInput').val();

            metricBMICalc(cmInput, kgInput);
        } else if ($('.imperial-fields').is(':visible')) {
            console.log("False");
            let inInput = $('#inInput').val();

            let lsbInput = $('#lsbInput').val();

            imperialBMICalc(inInput, lsbInput);
        } else {
            alert("error");
        }

        if (BMI <= 18) {

            console.log("UnderW");

            $('.all').hide();
            $('#underW').show();
        } else if (BMI >= 18.9 & BMI <= 24.9) {

            console.log("NormalW");
            $('.all').hide();
            $('#normalW').show();

        } else if (BMI >= 25 & BMI <= 29.9) {

            console.log("OverW");
            $('.all').hide();
            $('#overW').show();
        } else if (BMI > 30) {

            console.log("Obese");
            $('.all').hide();
            $('#obeseW').show();

        } else {
            alert('system error');
        }

        $('#result').html('<p>' + parseFloat(BMI).toFixed(1) + '</p>');
        console.log(BMI);




    });

});