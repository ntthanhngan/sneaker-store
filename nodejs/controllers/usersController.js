const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'sneaker-store-secret-key';



const register = async(req,res)=>{
    try {
        const {firstname, lastname, email, password, dob, gender} = req.body
        
        const emailExists = await Users.findOne({ where: { email } });
        if (emailExists ) {
            res.status(400).json({ error: 'Email already registered' })
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        const hashedPass = await bcrypt.hash(password, 10)
        await Users.create({
            firstname: firstname, 
            lastname: lastname, 
            email: email, 
            password: hashedPass,
            dob: dob,
            gender: gender
        })
        
        res.status(200).json({status: "Success"})
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}


const login = async(req, res)=>{
    try {
        const {email, password} = req.body

        const user = await Users.findOne({ where: { email: email } })
        if(!user) {
            return res.status(404).json({error: 'User not available'})
        }
        
        const payload = { name: user.firstname };
        bcrypt.compare(password, user.password, (err, response)=>{
            if(err){
                return res.status(400).json({error: "Password handling error"})
            }
            if (response) {
                const token = jwt.sign(payload, secretKey, {expiresIn: '2h'})
                res.cookie("token", token)
                res.status(200).json({status: "Success", user})
            } else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}

const verify = (req, res, next)=>{
    const token = req.cookies.token;
    if (!token) {
        return res.json({error: "You are not authenticated"})
    } else {
        jwt.verify(token, secretKey, (err, decode)=>{
            if (err) {
                return res.json({error: "Token is not right"})
            } else {
                req.name = decode.name
                next()
            }
        })
    }
}

const verifyUser = (req, res)=>{
    try {
        return res.json({status: "Success", name: req.name})
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}

const logout = (req, res)=>{
    try {
        res.clearCookie('token')
        return res.json({status: "Success"})
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}

module.exports ={
    register,
    login,
    verifyUser,
    verify,
    logout
}