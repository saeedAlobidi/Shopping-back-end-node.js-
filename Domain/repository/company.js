const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class Company {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(company){
         return  
         await  this.db.Query("INSERT INTO [dbo].[Company] ([name] ,[createdAt] ) VALUES ('"+company.name+"' ,'"+dateTime()+"' ");
         
    }

    async get(company){
        return  
        await  this.db.Query("select * from [dbo].[Company] where  id like '%"+company.id+"%'");
        
   }

   async update(company){
    return  
    await  this.db.Query("UPDATE [dbo].[Company] SET [name] = '"+company.name+"', ,[modifiedAt] = '"+dateTime()+"' WHERE id = '"+company.id+"'");
    
}


}

module.exports= {Company}