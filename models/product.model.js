module.exports = mongoose => {
    const Product =mongoose.model(
                "product",
        mongoose.Schema(
            {
                name:{type:String},
                availableItems:{type:Number},
                category:{type:String},
                createdAt:{type:Date},
                description:{type:String},
                imageURL:{type:String},
                manufacturer:{type:String},
                price:{type:Number},
                updatedAt:{type:Date}

            }
        )
    );
    return Product;
};