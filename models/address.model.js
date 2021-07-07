module.exports = mongoose => {
    const Address =mongoose.model(
                "address",
        mongoose.Schema(
            {
                id:{type:Number},
                city:{type:String},
                landmark:{type:String},
                name:{type:String},
                contactNumber:{type:String},
                state:{type:String},
                street:{type:String},
                zipCode:{type:String},
                user:{
                    $oid:{type:String}
                }

            }
        )
    );
    return Address;
};