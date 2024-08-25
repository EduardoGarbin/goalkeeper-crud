export const adminOnlyMiddleware = (req, res, next) => {
    console.log(req.userRole)
    // if (req.userRole !== 'admin') {
    //     return res.status(403).json({ message: 'Acesso negado. Apenas administradores podem realizar esta ação.' });
    // }
    // next();
};
