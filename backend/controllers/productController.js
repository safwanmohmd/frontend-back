import productModel from "../model/productModel.js";


export const addProduct = async (req,res)=>{
  const {name,price} = req.body
  if(!name || !price){
   return res.json("price required")

    
  }
  const newProduct = await productModel.create({name,price,user:req.user.userId})
    return res.json({message:"created", product:newProduct})
}
export const getProducts = async (req,res)=>{

    try {
       
        const products = await productModel.find({user:req.user.userId})
    res.json(products)
    } catch (error) {
        res.json(error.mesage)
    }
  

}