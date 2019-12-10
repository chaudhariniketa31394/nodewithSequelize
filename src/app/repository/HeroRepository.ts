import HeroModel = require("./../model/HeroModel");
import IHeroModel = require("./../model/interfaces/HeroModel");
import Hero = require("./../dataAccess/schemas/HeroSchema");
 import RepositoryBase = require("./base/RepositoryBase");

class HeroRepository  extends RepositoryBase<IHeroModel> {
    // class HeroRepository {
    constructor () {
        super(Hero);
    }   
    
    create (item: any, callback: (error: any, result: any) => void) {
        Hero.sync({ force: false }).then((res) => {
            console.log("+++++++++++++++=",res);
            console.log("item",item);
            
            Hero.create(item).then(jane => {
                console.log("Jane's auto-generated ID:", jane.id);
                callback(null,jane);
            });
        });
        
    }
} 


Object.seal(HeroRepository);
export = HeroRepository;