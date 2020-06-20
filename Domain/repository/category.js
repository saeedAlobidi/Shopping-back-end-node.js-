const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class Category {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(Category){
         return  
         await  this.db.Query("INSERT INTO [dbo].[Category] ([name] ,[picture] ,[storeId] ,[status] ,[createdAt] ,[modifiedAt]) VALUES ('"+Category.name+"','"+Category.picture+"' ,'"+Category.storeId+"'  ,'"+Category.status+"' ,'"+dateTime()+"'");
         
    }

    async get(Category){
        return  
        await  this.db.Query("select * from  [dbo].[Category]   where  id like '%"+Category.id+"%'");
        
   }

   async update(Category){
    return  
    await  this.db.Query("UPDATE [dbo].[Category] SET [name] = '"+Category.name+"' ,[picture] = '"+Category.picture+"',[storeId] = '"+Category.storeId+"' ,[status] = '"+Category.status+"' ,[modifiedAt] = '"+dateTime()+"'  WHERE id ='"+Category.id+"'");
    
}


}

module.exports= {Category}