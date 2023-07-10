import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// UserModel for mongodb
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    fullName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email'
        ],
    },
    password: {
        type: String,
        minLength: [6, 'Please provide a password with min length 6'],
        required: [true, 'Please enter a password'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    signedIn: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isBLocked: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: {
        type: String,
    },
    token: {
        type: String,
    }
});

/// [Create a jsonwebtoken and return it]
UserSchema.methods.generateJwtFromUser = function () {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env
    const payload = {
        id: this._id,
        name: this.name
    }
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE })
    return token
}

/// [Middleware for hashing password on user registered]
UserSchema.pre("save", function (next) {
    // password is change?
    if (!this.isModified('password')) {
        next()
    }

    // if password is not change, password is hashed
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err)
            this.password = hash
            next()
        })
    })
})


const User = mongoose.model("User", UserSchema);

export default User