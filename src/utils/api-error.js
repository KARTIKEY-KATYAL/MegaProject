class ApiError extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.message = message
        this.errors = errors
        this.statuscode = statuscode
        this.success = false

        if (stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(stack)
        }
    }
}

export {ApiError}