<?php
    $url = curl_init();

    curl_setopt($url, CURLOPT_URL, 'https://pirate.monkeyness.com/api/translate?english='.urlencode($_GET["english"]));
    curl_setopt($url, CURLOPT_RETURNTRANSFER, true);

    $obj = curl_exec($url);
    curl_close($url);
    echo $obj;
?>