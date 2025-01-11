import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createProduct = async (req, res)=>{
    const product = req.body; // user will use this data
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please fill all fields"});
    };
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateProduct = async(req, res)=>{
    const {id} = req.params;
    const updatedData = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return4res.status(401).json({success: false, message: "Invalid Product ID"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {new: true});
        res.status(201).json({success: true, data: updatedProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return4res.status(401).json({success: false, message: "Invalid Product ID"});
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: true, message: "Server Error"});
    }
};