const {dataBase} = require("../Infrastructure/database/DataBase");
const dateTime = require('date-time');
class Customer {


    constructor(){
                 this.db=dataBase.getInstance();
    }
     
    async set(customer){
         return  
         await  this.db.Query("INSERT INTO [dbo].[Customer] ([name] ,[description] ,[companyId] ,[phone] ,[picture] ,[status] ,[createdAt] ,[modifiedAt]) VALUES ('"+customer.name+"' ,'"+customer.description+"' ,'"+customer.companyId+"','"+customer.phone+"','"+customer.picture+"','"+customer.status+"' ,'"+dateTime()+"')");
         
    }

    async get(customer){
        return  
        await  this.db.Query("select * from [dbo].[Customer] where  id like '%"+customer.id+"%'");
        
   }

   async update(customer){
    return  
    await  this.db.Query("UPDATE [dbo].[Customer] SET [name] ='"+customer.name+"' ,[description] ='"+customer.description+"' ,[companyId] = '"+customer.companyId+"' ,[phone] = '"+customer.phone+"',[picture] = '"+customer.picture+"' ,'"+customer.status+"' ,[createdAt] = '"+dateTime()+"'  WHERE id='"+customer.id+"'");
    
}


}

module.exports= {Customer}