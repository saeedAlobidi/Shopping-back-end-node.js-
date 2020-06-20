const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class Employess {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(employess){
         return  
         await  this.db.Query("INSERT INTO [dbo].[Employess] ([name] ,[picture] ,[status] ,[compnatId] ,[createdAt] ) VALUES ('"+employess.name+"','"+employess.picture+"' ,'"+employess.status+"' ,'"+employess.companyId+"' ,'"+dateTime()+"' )");
         
    }

    async get(  employess   ){
        return  
        await  this.db.Query("select * from [dbo].[Employess] where  id like '%"+employess.id+"%'");
        
   }

   async update(  employess   ){
    return  
    await  this.db.Query("UPDATE [dbo].[Employess] SET [name] ='"+employess.name+"',[picture] = '"+employess.picture+"' ,[status] = '"+employess.status+"',[compnatId] = '"+employess.companyId+"' [modifiedAt] = '"+dateTime()+"'  WHERE id='"+employess.id+"'");
    
}


}

module.exports= {Employess}