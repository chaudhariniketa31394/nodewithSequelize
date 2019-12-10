

import IRead = require("./../interfaces/base/Read");
import IWrite = require("./../interfaces/base/Write");
import IHeroModel = require("./../../model/interfaces/HeroModel");


 
class RepositoryBase<T> implements IRead<T>, IWrite<T> {
    
     private _model: any;
    
    constructor (schemaModel: any) {
        this._model = schemaModel;
     
    
    }
    
    create (item: T, callback: (error: any, result: any) => void) {
        this._model.schema.sync({ force: true }).then((res) => {
            console.log("+++++++++++++++=",res);
            
            this._model.create(item).then(jane => {
                console.log("Jane's auto-generated ID:", jane.id);
                callback(null,jane);
            });
        });
        
    }
    
    retrieve (callback: (error: any, result: any) => void) {
        //  this._model.find({}, callback)
    }
    
    update (_id: string, item: T, callback: (error: any, result: any) => void) {
            // this._model.update({_id: _id}, item, callback);
            
    }
        
    delete (_id: string, callback:(error: any, result: any) => void) {
        // this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));
       
    } 
    
    findById (_id: string, callback: (error: any, result: T) => void) {
        // this._model.findById( _id, callback);
    }
    
    
    // private toObjectId (_id: string) : mongoose.Types.ObjectId {
    //     return mongoose.Types.ObjectId.createFromHexString(_id)
    // }
    
}

export = RepositoryBase;