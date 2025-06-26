<<<<<<< HEAD
export const signup = async  (req, res)=>{
   try{
    const {username, fullname, email, password} = req.body;
   }catch(error){
    console.log(`Error in signup controller: ${error}`)
        res.status(500).json({error: "Internal server Error"})   
}
}
=======
import User from "../models/user.model.js"
export const signup = async(req, res) =>{
    try{
        const {username, fullName, email, password} = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)){
                req.status(400).json({error: "Invalid Email format"})
        }
      const existingEmail = await User.findOne({email})
      const existingUsername = await User.findOne({username})
      
      if (existingEmail || existingUsername){
       return res.status(400).json({error: "Already Uerrname or EmailId exist"})
      }
      if (password.length < 6) {
        return res.status (400).json({error: "passwod length must have atleast 6 chat length"})

      }
    }catch(error){
        console.log(`Error in signup controller: ${error}`);
        res.status(500).json({error: "Internal Server Error"})
    }
}

>>>>>>> 224a8e23ece0379af4389fa9e5b07f4196dd46f3
export const login =  (req, res)=>{
    res.send("login");
}
export const logout =  (req, res)=>{
    res.send("logout");
}






