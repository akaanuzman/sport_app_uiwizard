// General CustomError class for handling errors
// it takes error messages and status codes
class CustomError extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

export default CustomError