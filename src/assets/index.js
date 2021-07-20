'use strict';

const aws = require('aws-sdk');

// It is recommended that we instantiate AWS clients outside the scope of the handler
// to take advantage of connection re-use.
const docClient = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  console.log('Received S3 event!!:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  // const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  // const key = event.Records[0].s3.object.key; //eslint-disable-line
  const bucket = 'patientdata10032-dev';
  const key = 'public/765daf0b-4107-4cbe-ada4-cde51cfe1979/surgical_test.csv';
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
  var fields = key.split('/');
  var taskID = fields[1];
  console.log('Task ID: ' + taskID);
  const params = {
    TableName: "Task-xwk34mr6p5cqpnhavb7e5pad2y-dev",
    Key: {
      // "filename": "patientdemo_test.csv"
      "id": taskID
    },
    UpdateExpression: "set status2 = :s",
    // , #MyVariable = :y",
    // ExpressionAttributeNames: {
    //     "#MyVariable": "variable23"
    // },
    ExpressionAttributeValues: {
      ":s": "1",
    }
  };
  // params["Key"]["filename"] = "patientdemo_test.csv";
  docClient.update(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
};
