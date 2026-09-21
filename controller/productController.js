import { addProductService ,getProductService , purchaseProductService , restockProductService ,getProductHistoryService} from "../service/productService.js";


export const addProductController = async (req, res) => {
    const productDetials = req.body;
    try {
        const product = await addProductService(productDetials);
        if (product) {
            res.status(201)
                .json({
                    "message": "product added successfully"
                })
        }
    } catch (error) {
        // console.log(error);
        res.status(500)
            .json({
                "message": error.message,
                "status":error.status
            })
    }
}


export const getProductsController = async (req,res) =>{
    try{
    const products = await getProductService();
    res.status(200)
    .json({
        "products":products
    })
    }catch(error){
        res.status(500)
        .json(
            {
                "message":error.message
            })
    }
}


export const purchaseProductController = async (req,res) =>{
    const product = req.body;
    try{
   const updatedProduct =await purchaseProductService(product);
    res.status(201)
    .json({
        "message":"product puchased",
        "updatedProduct":updatedProduct
    })
    }catch(error){
        res.status(500)
        .json({
            "error":error.message
        })
    }
}


export const restockProductController = async (req,res) =>{
    const product = req.body;
    try{
   const updatedProduct =await restockProductService(product);
    res.status(201)
    .json({
        "message":"product restocked",
        "updatedProduct":updatedProduct
    })
    }catch(error){
        res.status(500)
        .json({
            "error":error.message
        })
    }
}

export const getProductHistoryController = async (req,res)=>{
    const productName = req.params.productName;
    try{
    const productHistory = await getProductHistoryService(productName); 
    res.status(200)
    .json({
        "history":productHistory
    })
    }catch(error){
        res.status(500)
        .json({
            "error":error.message
        })
    }
}