export const signup = async  (req, res)=>{
   try{
    const {username, fullname, email, password} = req.body;
   }catch(error){
    console.log(`Error in signup controller: ${error}`)
        res.status(500).json({error: "Internal server Error"})   
}
}
export const login =  (req, res)=>{
    res.send("login");
}
export const logout =  (req, res)=>{
    res.send("logout");
}






