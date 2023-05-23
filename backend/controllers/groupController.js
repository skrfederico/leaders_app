const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Group = require('../models/groups')

// Read all
router.get('/', async (req, res) => {
  try {
    const query = await Group.find({})
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Update
router.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const updatedBookmark = await Group.findByIdAndUpdate(id, {
      ...req.body
    })
    return res.json(updatedBookmark)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Create
router.post('/', async (req, res) => {
  try {
    const createdBookmark = await Group.create({ ...req.body })
    return res.json(createdBookmark)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const deletedBookmark = await Group.findByIdAndDelete(id)
    // console.log('router delete')
    return res.json(deletedBookmark)
  } catch (error) {
    console.log('error')
    res.status(500).json({ error })
  }
})

// read one
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const query = await Group.findOne({ _id: id })
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})
module.exports = router
