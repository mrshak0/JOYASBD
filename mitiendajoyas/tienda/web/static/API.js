$(document).ready(function() {
    $('#apiRequestBtn').click(function() {

        const apiUrl = 'https://www.goldapi.io/api/XAU/USD';
        
        
        const accessToken = 'goldapi-1xrxslw8e8huc-io'; 

        $.ajax({
            url: apiUrl,
            method: 'GET',
            headers: {
                'x-access-token': accessToken,
                'Content-Type': 'application/json'
            },
            success: function(response) {
                
                $('#apiResponse').html('<pre>' + JSON.stringify(response, null, 2) + '</pre>');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                
                $('#apiResponse').html('<p>Error: ' + textStatus + '</p><p>' + errorThrown + '</p>');
            }
        });
    });
});