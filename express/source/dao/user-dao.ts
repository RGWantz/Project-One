import aws from "aws-sdk";
import { ConfigurationOptions } from "aws-sdk/lib/config";
const awsConfig: ConfigurationOptions = {
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

aws.config.update(awsConfig);

const dynamodb = new aws.DynamoDB();
const docClient = new aws.DynamoDB.DocumentClient();

export function saveUser(user): Promise<any> {
  return docClient
    .put({
      TableName: "ProjectOneUserTable",
      Item: user
    })
    .promise();
}

export function findUserByUsername(uName: string): Promise<any> {
  return docClient
    .query({
      TableName: "ProjectOneUserTable",
      KeyConditionExpression: "#us = :user",
      ExpressionAttributeNames: {
        "#us": "username"
      },
      ExpressionAttributeValues: {
        ":user": uName
      }
    })
    .promise();
}

export function findByUsername(uName: string): Promise<any> {
  return docClient
    .get({
      TableName: "ProjectOneUserTable",
      Key: {
        username: uName
      }
    })
    .promise();
}

export function update(currentUser): Promise<any> {
  return docClient
    .update({
      TableName: "ProjectOneUserTable",
      Key: {
        username: currentUser.username
      },
      UpdateExpression:
        "set #r = :r , #pass = :pass, #email = :email, #first = :firstname, #last = :lastname",
      ExpressionAttributeNames: {
        "#first": "firstName",
        "#last": "lastName",
        "#email": "email",
        "#pass": "password",
        "#r": "role"
      },
      ExpressionAttributeValues: {
        ":r": currentUser.role,
        ":pass": currentUser.password,
        ":email": currentUser.email,
        ":firstname": currentUser.firstName,
        ":lastname": currentUser.lastName
      },
      ReturnValues: "UPDATED_NEW"
    })
    .promise();
}
