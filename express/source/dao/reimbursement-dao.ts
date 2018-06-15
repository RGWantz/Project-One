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

export function saveReim(reim): Promise<any> {
  return docClient
    .put({
      TableName: "ProjectOneReimTable",
      Item: reim
    })
    .promise();
}

export function getAllReims(): Promise<any> {
  return docClient
    .scan({
      TableName: "ProjectOneReimTable"
    })
    .promise();
}

export function findReimsByUsername(uName: string): Promise<any> {
  return docClient
    .query({
      TableName: "ProjectOneReimTable",
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

export function findByStatus(status: string): Promise<any> {
  return docClient
    .query({
      TableName: "ProjectOneReimTable",
      IndexName: "status-index",
      KeyConditionExpression: "#st = :st",
      ExpressionAttributeNames: {
        "#st": "status"
      },
      ExpressionAttributeValues: {
        ":st": status
      }
    })
    .promise();
}

export function update(reim): Promise<any> {
  return docClient
    .update({
      TableName: "ProjectOneReimTable",
      Key: {
        username: reim.username,
        timeSubmitted: reim.timeSubmitted
      },
      UpdateExpression: "set #st = :st , #app = :app",
      ExpressionAttributeNames: {
        "#app": "approver",
        "#st": "status"
      },
      ExpressionAttributeValues: {
        ":st": reim.status,
        ":app": reim.approver
      },
      ReturnValues: "UPDATED_NEW"
    })
    .promise();
}

export function findSingleReim(uName: string, time: number): Promise<any> {
  return docClient
    .get({
      TableName: "ProjectOneReimTable",
      Key: {
        username: uName,
        timeSubmitted: time
      }
    })
    .promise();
}
