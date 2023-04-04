<?php
$api_key = 'your_api_key_here';
$base_url = 'https://example.com/api';
require_once('dashboard.php');

// Access the Analytics Dashboard
$analytics_url = $base_url . '/analytics/dashboard';
$analytics_headers = array('Authorization: Bearer ' . $api_key);
$analytics_options = array(
    CURLOPT_URL => $analytics_url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $analytics_headers
);
$analytics_curl = curl_init();
curl_setopt_array($analytics_curl, $analytics_options);
$analytics_response = curl_exec($analytics_curl);
curl_close($analytics_curl);


echo $analytics_response;
?>
