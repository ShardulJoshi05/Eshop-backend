module.exports = mongoose => {
    const Order =mongoose.model(
                "order",
        mongoose.Schema(
            {
                id: { type : Number},
                amount: {type : double},
                order_date:{type:date},
                product:{
                    type :mongoose.Schema.Types.ObjectId,
                    ref:product
                },
                address:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:address
            },
            user:{
                type : mongoose.Schema.Types.ObjectId,
                ref:user
            }

            }
        )
    );
    return Order;
};