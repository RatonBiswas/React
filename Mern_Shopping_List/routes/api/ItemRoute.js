const express = require('express')
const router = express.Router()

// controllers file
const {getAllItems,createItem,deleteItem,getItem,editItem} = require('../../controllers/itemController')

// @route Get api/items
// @desc Get All Items
// @access Public
router.get('/',getAllItems)


// @route Post api/items
// @desc Create An Item
// @access Public
router.post('/',createItem)

// @route Delete api/items/1
// @desc Delete A Item
// @access Public
router.delete('/:id',deleteItem)

// @route Get api/items/1
// @desc Get A Item
// @access Public
router.get('/:id',getItem)

// @route Get api/items/1
// @desc Get All Items
// @access Public
router.patch('/:id',editItem)


module.exports = router