class ApiResponse{
    constructor(statuscode,data,message){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.suceess = statuscode < 400
    }
}

export { ApiResponse }