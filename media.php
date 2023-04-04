<?php
$api_key = 'your_api_key_here';
$base_url = 'https://example.com/api';
require_once('dashboard.php');

// Access the Media Dashboard
$media_url = $base_url . '/media/dashboard';
$media_headers = array('Authorization: Bearer ' . $api_key);
$media_options = array(
    CURLOPT_URL => $media_url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $media_headers
);
$media_curl = curl_init();
curl_setopt_array($media_curl, $media_options);
$media_response = curl_exec($media_curl);
curl_close($media_curl);


echo $media_response;

?>
