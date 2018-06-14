import express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as reimService from '../services/reimbursement-service';
export const reimbursementRouter = express.Router();


reimbursementRouter.get('', (req: Request, resp: Response) => {
    console.log(`Retrieving all reimbursements`)
    reimService.getAllReimsSince()
        .then(data => {
            resp.json(data.Items);
        })
        .catch(err => {
            resp.sendStatus(500);
        });

})

reimbursementRouter.get('/user/:username/time/:timeSubmitted', (req: Request, resp, Response) => {
    const username = req.params.username;
    const time = parseInt(req.params.timeSubmitted);
    console.log(`retrieving reimbursement for username ${username} and time ${time}`);
    reimService.findSingleReim(username, time)
        .then(data => {
            resp.json(data.Item);
        })
        .catch(err => {
            console.log(err);
            resp.sendStatus(500);
        });
});

reimbursementRouter.get('/user/:username', (req: Request, resp, Response) => {
    const username = req.params.username;
    console.log(`retrieving reimbursements for username ${username}`);
    reimService.findReimsByUsername(username)
        .then(data => {
            resp.json(data.Items);
        })
        .catch(err => {
            resp.sendStatus(500);
        });
});

reimbursementRouter.get('/status/:status', (req: Request, resp, Response) => {
    const stat = req.params.status;
    console.log(`retrieving reimbursements for status ${stat}`);
    reimService.findByStatus(stat)
        .then(data => {
            resp.json(data.Items);
        })
        .catch(err => {
            resp.sendStatus(500);
        });
});

reimbursementRouter.post('', (req: Request, resp: Response) => {
    console.log(`adding reimbursement ${JSON.stringify(req.body)}
    to reimbursement list`);
    console.log('')
    if (!req.body.username) {
        resp.sendStatus(400);
    } else {
        // const reim = {
        //     username: req.body.username,
        //     timeSubmitted: Date.now(),
        //     items: req.body.items,
        //     approver: 'pending',
        //     status: 'pending',
        //     receipts: req.body.receipts
        // }
        reimService.saveReim(req.body)
            .then(data => {
                resp.status(201);
            })
            .catch(err => {
                console.log(err);
                resp.sendStatus(500);
            });
    }
});

reimbursementRouter.put('/status/pending', (req: Request, resp: Response) => {
    console.log(`modifying reimbursement ${JSON.stringify(req.body)}`);
    reimService.update(req.body)
        .then(data => {
            resp.json(data);
        })
        .catch(err => {
            resp.sendStatus(500);
        });
}); 
