const okResponse=(res,status,message,data,token=null)=>{
    const response={
        success:true,
        status,
        message,
        data,
        token,
    }
    return res.status(response.status).json(response)
}

const handleError=(res,status,message,data=null)=>{
    const response={
        success:false,
        status,
        message,
        data,
    }
    return res.status(response.status).json(response)
}

module.exports={
    handleError,
    okResponse
}