<?php
// Clear Laravel Cache on InfinityFree
echo "Clearing Laravel cache...\n";

// Clear application cache
if (function_exists('opcache_reset')) {
    opcache_reset();
    echo "OPcache cleared!\n";
}

// Clear Laravel cache directories
$cache_dirs = [
    '../storage/framework/cache',
    '../storage/framework/sessions', 
    '../storage/framework/views',
    '../bootstrap/cache'
];

foreach ($cache_dirs as $dir) {
    if (is_dir($dir)) {
        $files = glob($dir . '/*');
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
        echo "Cleared: $dir\n";
    }
}

echo "Cache cleared successfully!\n";
echo "You can now delete this file for security.\n";
?>