const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class SubCategory {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(SubCategory){
         return  
         await  this.db.Query("INSERT INTO [dbo].[SubCategory] ([categoryId] ,[name] ,[picture] ,[description] ,[createdAt] ) VALUES ( '"+SubCategory.categoryId+"' , '"+SubCategory.name+"' , '"+SubCategory.picture+"' ,'"+SubCategory.description+"' , '"+dateTime()+"' )");
         
    }

    async get(SubCategory){
        return  
        await  this.db.Query("select * from [dbo].[SubCategory] where  id like '%"+SubCategory.id+"%' and categoryId like '%"+SubCategory.categoryId+"%'");
        
   }

   async update(SubCategory){
    return  
    await  this.db.Query("UPDATE [dbo].[SubCategory] SET [categoryId] = '"+SubCategory.categoryId+"' ,[name] = '"+SubCategory.name+"' ,[picture] = '"+SubCategory.picture+"' ,[description] = '"+SubCategory.description+"'  ,[modifiedAt] = '"+dateTime() +"'WHERE id='"+SubCategory.id+"'");
    
}


}

module.exports= {SubCategory}