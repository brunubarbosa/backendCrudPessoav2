import { Router } from 'express';

import model from '../../db/model'

const routes = new Router();

routes.get('/api/pessoa', async (req, res) => {
    let response = await model.find({})
    return res.send(response)
})
routes.post('/api/pessoa', async (req, res) => {
    let response = await model.create(req.body)
    return res.send(response)
})
routes.get('/api/pessoa/:id', async (req, res) => {
    let response = await model.findById({_id: req.params.id})
    return res.send(response)
})

export default routes;