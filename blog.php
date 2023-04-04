<?php
$api_key = 'your_api_key_here';
$base_url = 'https://example.com/api';
require_once('dashboard.php');
// Access the Blog Dashboard
$blog_url = $base_url . '/blog/dashboard';
$blog_headers = array('Authorization: Bearer ' . $api_key);
$blog_options = array(
    CURLOPT_URL => $blog_url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $blog_headers
);
$blog_curl = curl_init();
curl_setopt_array($blog_curl, $blog_options);
$blog_response = curl_exec($blog_curl);
curl_close($blog_curl);


// Do something with the Dashboard responses
// For example, echo the HTML content of each Dashboard
echo $blog_response;

?>
