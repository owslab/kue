var kue = require( '../' );

// create our job queue
var jobs = kue.createQueue();

jobs.process( 'testing', 1, function ( job, done ) {
    job.owsdata = "aaaaa";
    job.on('customEvent', function(event_data){
        console.log("Incoming event for job:", job.data, event_data);
        if(event_data.type = "stop_request") {
            job.log("pasitive done")
            done();
        }
    });

    job.on('complete', function(result){
      console.log('Job completed with data ', result);
    })

    console.log("Processing job:", job.eventNames());

    setTimeout(function(){
        //done();
    }, 2000);
});

// start the UI
kue.app.listen( 3000 );
console.log( 'UI started on port 3000' );
