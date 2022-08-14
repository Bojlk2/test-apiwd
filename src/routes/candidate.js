const express = require('express')
const { getCandidates, getCandidateById, addOrUpdateCandidate, deleteCandidate } = require('../../dynamo')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const candidates = await getCandidates()
        res.json(candidates)
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const candidates = await getCandidateById(id)
        res.json(candidates)
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    const candidate = req.body
    try {
        const newCandidate = await addOrUpdateCandidate(candidate)
        res.json({
            ok: true,
            message: '¡Candidato creado con éxito!',
            newCandidate
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.patch('/:id', async (req, res) => {
    const candidate = req.body
    const {id} = req.params
    character.id = id
    try {
        const updateCandidate = await addOrUpdateCandidate(candidate)
        res.json({
            ok: true,
            message: '¡Candidato actualizado con éxito!',
            updateCandidate
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        res.json(await deleteCandidate(id))
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

module.exports = router