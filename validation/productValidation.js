import { body, validationResult } from "express-validator";




export const productValidationRules = [
    body("productName")
        .trim()
        .notEmpty()
        .withMessage("Product Name Cannot be empty"),

    body("price")
        .isInt({ min: 0 })
        .withMessage("price should be grater than 0"),

    body("availableStock")
        .isInt({ min: 0 })
        .withMessage("quantity should be positive")
];


export const productValidate = (req, res, next) => {
    const error = validationResult(req);


    if (error.isEmpty()) {
        next();

    } else {

        return res.status(400)
            .json({
                "message": "validation Failed",
                "error": error.array()
            })
    }
}


export const productPurchaseValidationRules = [
    body("productName")
        .trim()
        .notEmpty()
        .withMessage("product name is needed"),

    body("quantity")
        .notEmpty()
        .withMessage("quantity is needed")
        .isInt({ min: 1 })
        .withMessage("quantity should be grater than 0")
]

export const productPurchaseValidate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        next();
    }else{
        return res.status(400)
        .json({
            "message": errors.array()
        })
    }

    
}



export const productRestockValidationRules = [
    body("productName")
        .trim()
        .notEmpty()
        .withMessage("product name is needed"),

    body("quantity")
        .notEmpty()
        .withMessage("quantity is needed")
        .isInt({ min: 1 })
        .withMessage("quantity should be grater than 0")
]


export const productRestockValidate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        next();
    }else{
        return res.status(400)
        .json({
            "message": errors.array()
        })
    }
}

