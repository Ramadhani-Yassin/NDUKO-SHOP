<?php
header('Content-Type: text/plain; charset=utf-8');
error_reporting(E_ALL);
ini_set('display_errors', '1');

echo "start\n";

// Basic PHP check
echo "php_version: " . PHP_VERSION . "\n";

// Extension checks
echo "ext_pdo: " . (extension_loaded('pdo') ? 'yes' : 'no') . "\n";
echo "ext_pdo_mysql: " . (extension_loaded('pdo_mysql') ? 'yes' : 'no') . "\n";
echo "ext_mysqli: " . (extension_loaded('mysqli') ? 'yes' : 'no') . "\n";

// Mysqli test
$mysqli = @mysqli_connect('sql301.infinityfree.com', 'if0_39898855', 'Ramah5656', 'if0_39898855_nduko_shop');
echo "mysqli_connect: " . ($mysqli ? "ok" : "error: " . mysqli_connect_error()) . "\n";
if ($mysqli) { mysqli_close($mysqli); }

// PDO test
try {
  $pdo = new PDO(
    'mysql:host=sql301.infinityfree.com;dbname=if0_39898855_nduko_shop;charset=utf8mb4',
    'if0_39898855',
    'Ramah5656',
    [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
  );
  echo "pdo_connect: ok\n";
} catch (Throwable $e) {
  echo "pdo_connect: error: " . $e->getMessage() . "\n";
}

echo "done\n";