<?php
header('Content-Type: text/plain; charset=utf-8');
error_reporting(E_ALL);
ini_set('display_errors', '1');

function check($path) {
  return [
    'exists' => file_exists($path),
    'is_dir' => is_dir($path),
    'is_writable' => is_writable($path),
    'realpath' => realpath($path) ?: '(none)',
  ];
}

$rootFile = __DIR__ . '/_permtest.txt';
$logsDir  = __DIR__ . '/storage/logs';
$logsFile = $logsDir . '/_permtest.txt';

echo "doc_root: " . __DIR__ . "\n\n";

echo "[dirs]\n";
print_r(['storage' => check(__DIR__ . '/storage')]);
print_r(['storage/logs' => check($logsDir)]);
echo "\n";

echo "[write root]\n";
$r1 = @file_put_contents($rootFile, 'root ok ' . date('c') . "\n", FILE_APPEND);
var_dump($rootFile, $r1, $r1 === false ? error_get_last() : null);
echo "\n";

echo "[write storage/logs]\n";
if (!is_dir($logsDir)) {
  @mkdir($logsDir, 0775, true);
}
$r2 = @file_put_contents($logsFile, 'logs ok ' . date('c') . "\n", FILE_APPEND);
var_dump($logsFile, $r2, $r2 === false ? error_get_last() : null);
echo "\n";

echo "[php]\n";
echo "php_version: " . PHP_VERSION . "\n";
echo "open_basedir: " . (ini_get('open_basedir') ?: '(none)') . "\n";
echo "disable_functions: " . (ini_get('disable_functions') ?: '(none)') . "\n";