const checkToken=function(req,res,next){
	let token=req.headers['authorization']

	if (token){
	// In practice use json web token verify method to check if token is valid
		next()
	} else {
		res.json({
			success:false,
			message:'no token in headers'
		})
	}
}

module.exports= {
	checkToken:checkToken
}
