const express = require('express')
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")

router.post('/pairs', (req, res) => {
    // res.status(200).json({names})
    try{
      const names = req.body.names;
      const pairs = GiftExchange.pairs(names);
      res.json(pairs);
      res.status(200).json({names})
    }catch(error){
      next(error);
    }
  })  

router.post('/traditional', (req, res) => {
    // res.status(200).json({names})
    // try {
    //   const pairs = req.body.names;
    //   const names =  GiftExchange.traditional(pairs)
    // res.status(200).json({ names })
    // } catch (error) {
    //   next(error)
    // }
    try{
      const names = req.body.names;
      const pairs = GiftExchange.traditional(names);
      res.json(pairs);
      res.status(200).json({names})
    }catch(error){
      next(error);
    }
  })  

module.exports = router