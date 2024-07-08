const Service = require('../service/login')

async function login(req,res){
try {
    const{email,password} = req.body ;

    const token = Service.login(email,password);

    res.json({token:token});
   
    


} catch (error) {
    res.status(400).json({success:false,message:"invalid credentials"})
}
}

module.exports = {login}