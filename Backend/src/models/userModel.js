import { Schema, model } from "mongoose";

const employee = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    user: {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    },
    sales: [{
        date: {
            type: Date,
            required: true
        },
        products: [{
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
    }]
},
    {
        timestamps: true
    }
)

export const employeeModel = model("Employee", employee)

