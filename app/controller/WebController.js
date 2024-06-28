

class WebController{

    async home(req,res){
       try{
        res.render('home',{
            title:"home page"
        })

       }catch(error){
        console.log(error);
       }


    }

}




module.exports=new WebController()