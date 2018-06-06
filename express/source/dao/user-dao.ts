import aws from 'aws-sdk'; 
import {ConfigurationOptions} from 'aws-sdk/lib/config'; 
const awsConfig: ConfigurationOptions = {
    region: 'us-east-1', 
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY 
}

aws.config.update(awsConfig); 

const dynamodb = new aws.DynamoDB(); 
const docClient = new aws.DynamoDB.DocumentClient(); 

export function saveUser(user) :Promise<any>{
    return docClient.put({
        TableName: 'ProjectOneUserTable', 
        Item: user
    }).promise();  
}

export function findUserByUsername(uName:string) :Promise<any> {
    return docClient.query({
        TableName: 'ProjectOneUserTable', 
        // Key: {
        //     username: uName
        // }
        KeyConditionExpression: '#us = :user',
        ExpressionAttributeNames: {
            '#us': 'username'  //this one is the same as in db
        },
        ExpressionAttributeValues: { 
            ':user': uName
        }
    }).promise(); 
} //I understand that get() would be desirable because we're anticipating only one response, but we can't use the FilterExpression with get()
//TODO currently it's still returning a whole user. Adjust so that it returns a boolean? Should not be too hard 
//TODO handle errors... maybe? does the catch just handle this? 
//Where do I put the message that says "please enter valid uName and pw"? That should go with the HTML somehow, right? 

export function findByUsername(uName:string) :Promise<any>{
    return docClient.get({
        TableName: 'ProjectOneUserTable', 
        Key: {
            username: uName
        }
    }).promise(); 
}
//possess this functionality? 
// export function update(movie) :Promise<any> {
//     return docClient.update({
//         TableName: 'ProjectOneUserTable',
//         Key: {
//             year: movie.year,
//             title: movie.title
//         },
//         UpdateExpression: 'set #r = :r , #desc = :desc', //google the dynamo db syntax for this depending on your chosen function
//         ExpressionAttributeNames: {
//             '#desc': 'description', 
//             '#r': 'rating'
//         },
//         ExpressionAttributeValues: {
//             ':r': movie.rating,
//             ':desc' : movie.description
//         },
//         ReturnValues: 'UPDATED_NEW'
//     }).promise();
// }