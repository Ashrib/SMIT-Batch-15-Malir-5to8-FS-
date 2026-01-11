import jwt from 'jsonwebtoken';

export function generateToken(userId) {
    return jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '2hrs'});
}


export async function verifyToken(token) {
    try {
        console.log("Verifying Token:", token);
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
}