import { Product } from "../model/product.js"
import { Transaction } from "../model/Transaction.js";


export const addProductService = async (productDetails) => {

    const product = await new Product(productDetails);
    const savedProduct = await product.save();

    if (savedProduct) {
        return true;
    }
    else {
        const error = new Error("duplicate entry");
        { error.status = 409 };
        throw error;
    }


}


export const getProductService = async () => {
    const products = await Product.find();
    if (products) {
        return products;
    } else {
        throw new Error("Products not found");
    }

}



export const purchaseProductService = async (product) => {
    console.log(product);

    const availableProduct = await Product.findOne({ productName: product.productName });

    if (availableProduct) {
        if (availableProduct.availableStock > product.quantity) {
            console.log("can fullfill order");
            const remainingStock = availableProduct.availableStock - product.quantity;
            console.log(remainingStock);
            const updatedProduct = await Product.findOneAndUpdate({ productName: product.productName },
                { availableStock: remainingStock },
                { new: true },

            );

            const transaction = new Transaction();
            transaction.productId = product.productName;
            transaction.quantity = product.quantity;
            transaction.transactionType = "PURCHASE";
            transaction.save();


            return updatedProduct;
        } else {
            const error = new Error("product not available");
            throw error;
        }
    }
}


export const restockProductService =async (product)=>{
    console.log(product);

    const availableProduct = await Product.findOne({ productName: product.productName });

    if (availableProduct) {

        console.log("can fullfill order");
        const updatedStock = availableProduct.availableStock + product.quantity;
        console.log(updatedStock);
        const updatedProduct = await Product.findOneAndUpdate({ productName: product.productName },
            { availableStock: updatedStock },
            { new: true }
        );

        const transaction = new Transaction();
        transaction.productName = product.productName;
        transaction.quantity = product.quantity;
        transaction.transactionType = "RESTOCK";
        transaction.save();


        return updatedProduct;
    }else{
        throw new Error("cant update null product");
    }

}


export const getProductHistoryService =async (productName)=>{
    const productHistory = await Transaction.find({productName:productName});
    console.log(productHistory.length);
    if(productHistory.length > 0){
        return productHistory;
    }
    else{
        throw new Error("Product Not found");
    }
}