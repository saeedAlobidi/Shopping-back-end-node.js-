const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class Store {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(Store){
         return  
         await  this.db.Query("INSERT INTO [dbo].[Store] ([name] ,[picture] ,[companyId] ,[createdAt]) VALUES ('"+Store.name+"','"+Store.picture+"' ,'"+Store.companyId+"','"+dateTime()+"'");
         
    }

    async get(Store){
        return  
        await  this.db.Query("select * from [dbo].[Store] where  id like '%"+Store.id+"%'");
        
   }

   async update(Store){
    return  
    await  this.db.Query("UPDATE [dbo].[Store] SET [name] ='"+Store.name+"' ,[picture] = '"+Store.picture+"',[companyId] ='"+Store.companyId+"' , [modifiedAt] = '"+dateTime()+"'  WHERE  id='"+Store.id+"'");
    
}


}