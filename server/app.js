var express = require('express');
var app = express();
var port = "8000";

app.listen(port, function(err, res){
  if(err)
  {
    console.log('Server Error: ' + err);
  }
  else{
    console.log('Server Started On: ' + port);
  }
});
