<?php
 $path=$_SERVER["DOCUMENT_ROOT"].'./index.html';
  $json=json_encode(simplexml_load_file('http://www.kuaidi100.com/query'));
  echo "$json";
?>