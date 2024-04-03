import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: {
        type: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            unique: true
         }],
        required: true
    },
    subTotal: {
        type: Number,
        required: true
    },
    shippingFees: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
        default: function () { return this.subTotal + this.shippingFees }
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing"
    },
    paymentStatus: {
        type: String,
        required: true,
        default: "Paid"
    },
    orderId: {
        type: Number,
        required: true,
        default: function () {
            // Convert the ObjectId to a hexadecimal string
            const hexString = this._id.toString();

            // Extract the timestamp part of the ObjectId (first 4 bytes)
            const timestampHex = hexString.substring(0, 8);

            // Convert the timestamp hex to a decimal number
            const timestampNumber = parseInt(timestampHex, 16);

            // Return the timestamp number as the unique identifier
            return timestampNumber;
        }
    },
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
}, { timestamps: true })

export default mongoose.model('Order', OrderSchema);