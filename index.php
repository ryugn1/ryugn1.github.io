<?php
$config = json_decode(file_get_contents('config.json'), true);

if ($config['maintenance']) {
    include 'error.html';
} else {

    include 'utama.html';
}
?>