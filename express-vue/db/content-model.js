var mongoose = require('mongoose')
var Schema = mongoose.Schema
var _ = require('lodash')
var ObjectId = mongoose.Types.ObjectId

var ContentModel = new Schema({
  contentID: {
    type: String
  },
  fields: {
    type: Schema.Types.Mixed
  }
})

var Model = mongoose.model('ContentModel', ContentModel)

/*
 Return an array of all contentID
 */
Model.getIDs = function(OnComplete){
  Model.find(function (err, contentmodels) {
    OnComplete( err, _.map(contentmodels, item => { return item.contentID }) )
  })
}

Model.getContentModelsById = function (contentID, OnComplete ) {
  //DB Query
  Model.find({ contentID: contentID }, (err, contentModels) => {
    //Attach MongoDB hash 
    var result = _.map( contentModels, content => { 
      var item = content.toObject()
      item.hash = content._id.toString()
      delete item._id
      delete item.__v
      return item
    })

    OnComplete( err, result )
  })  
}

/*
  Get Content By Hash
 */
Model.getContentByHash = function ( hash, OnComplete ) {
  Model.findOne({ _id: ObjectId( hash ) }, (err, result) => {      
    OnComplete( err, result )
  })  
}

/*
Return an array of fields
 */
Model.getFields = ( contentID, OnComplete ) => {
  Model.findOne({ contentID: contentID }, (error, result) => {    
    OnComplete( error, Object.keys( result.fields ) )    
  })
}

module.exports = Model
