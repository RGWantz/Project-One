import express from 'express'; 
import * as userService from '../services/user-service'; 
import {Request, Response, NextFunction} from 'express'; 
export const userRouter = express.Router(); 


// userRouter.get('', (req: Request, resp: Response) => {  
//     console.log(`Retrieving all users`)
//     resp.json(user); 
// }) //will I use this capacity? I have not yet planned to build in this function 

userRouter.get('/:username', (req: Request, resp, Response) => { 
    const username = req.params.username; 
    console.log(`retrieving user with username ${username}`); 
    //userService.findUser(username) //another option 
    userService.findUserByUsername(username)
    .then(data => {
        resp.json(data.Item);
        
    })
    .catch(err => {
        resp.sendStatus(500);
    });
    
}); 

userRouter.put('/:username', (req: Request, resp: Response) => {
    console.log(`modifying user ${JSON.stringify(req.body)}`); 
    userService.update(req.body) 
        .then(data => {
            resp.json(data);
        })
        .catch(err => {
            resp.sendStatus(500);
        });
}); 

userRouter.post('', (req:Request, resp:Response) => {  //doing this with an existing username will update the existing record, not create a new one. 
    
    userService.findUserByUsername(req.body.username) 
    .then(data => {
        console.log(data.Items);
       if(data.Items === []) { //I can't get this to happen! 
        console.log('Duplicate username caused request to fail');
        resp.sendStatus(400);
       } else {
           if (!req.body.username || !req.body.password) { //or do more checks to ensure it's a string, etc. FULLY VALIDATE THINGS
               resp.sendStatus(401);
           } else {
               createIt();
               resp.sendStatus(201);
           }
       }
       //
        
    })
    .catch(err => {
        resp.sendStatus(500); 
        
    });  
    
    function createIt() {
        const newUser = {
            username: req.body.username, 
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email: req.body.email,
            role: req.body.role 
        }
        
        //setTimeout( () => {  
            console.log(`adding user ${JSON.stringify(req.body)} to users`); 
            userService.saveUser(newUser)
                .then(data => {
                    resp.json(data.Items);
                })
                .catch(err => {
                    resp.sendStatus(500);
                }) //}, 3000);
    }

    
});