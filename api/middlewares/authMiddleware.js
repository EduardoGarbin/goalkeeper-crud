import jwt from 'jsonwebtoken';
const JWT_SECRET = 'rosito';

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido. Autenticação necessária.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Erro ao verificar token:', err);
            return res.status(401).json({ message: 'Token inválido ou expirado. Autenticação necessária.' });
        }

        req.userId = decoded.id;
        next();
    });
};
