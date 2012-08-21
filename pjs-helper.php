<?php

//get the session value

if(isset($_GET['session'])) {
  $session = $_GET['session'] 
}

$output = array();
$cmd = 'phantomjs --cookies-file=cookies.txt visit-all-in-region.js';
exec($cmd, $output);

print_r($output);

// connect
$m = new Mongo();

// select a database
$db = $m->okcupid;

// select a collection (analogous to a relational database's table)
$collection = $db->visited_profiles;

foreach($output as $c) {

  //get the username and add it to the mongodb db table
  $username = strtolower(substr($c, (strrpos($c, '/') + 1)));
  $username = explode('?',$username);
  print($username[0]);

  //$cmd = 'wget --no-cookies -q --header "Cookie: session='.$session.'" '.$c.' -O /dev/null';
  //exec($cmd);
}


