import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JTW_TOKEN, {
    expiresIn: '30d'
  })
}

export default generateToken