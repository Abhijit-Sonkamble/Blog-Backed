//For Success
module.exports.successRes = (status, error = false, message, result) => {
    return {status, error , message, result}
}

//For error 
module.exports.errorRes = (status, error = true, message) => {
    return {status, error , message}
}