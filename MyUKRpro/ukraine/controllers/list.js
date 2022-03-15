const List = require('../model/List')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAllLists = asyncWrapper( async (req, res) => { //get all listings
    
    const lists = await List.find({});
    res.status(200).json({ lists })
   
})

const createList = asyncWrapper(async (req, res) => {  //creata a listing 
   
    const list = await List.create(req.body)
    res.status(201).json({ list })
    
})

const getList = asyncWrapper( async (req, res) => {   //get a city
    
    const {city:cityName} = req.params
    const list = await List.findOne({city:cityName});
    if(!list){
        return res.status(404).json({msg:`no listing with city ${cityName}`})
    }
    res.status(200).json( { list })
   
})

module.exports = {
    getAllLists,
    getList, 
    createList
}