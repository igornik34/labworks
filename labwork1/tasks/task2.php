<html>

<head>
    <title>Задание №1.3/</title>
    <link rel="stylesheet" href="../../public/output.css">
</head>

<body class="bg-gradient-to-br from-teal-700 to-teal-900 text-white m-2">
    <h1 class="text-center text-3xl font-bold mt-7 mb-5 text-black">
    Задание №1.3
    </h1>
</body>

</html>
<?php
    $dollarsToRubles = 78.9; 
    $rublesToYuani = 0.08; 
    $dollarsCount = 1000;
    $rublesCount = $dollarsCount * $dollarsToRubles;
    $YuaniCount = $rublesCount * $rublesToYuani;
?>

<?php 
    echo "1000 USD = ";
    echo $YuaniCount;
    echo " CNY";
?>