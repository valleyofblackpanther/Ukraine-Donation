const express = require('express')
const router = express.Router()

const { getAllLists,
    getList, 
    createList } = require('../controllers/list')

router.route('/').get(getAllLists)
router.route('/create').post(createList)
router.route('/:city').get(getList)

module.exports = router