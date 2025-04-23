const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log('🔐 JWT_SECRET usado:', process.env.JWT_SECRET);

  console.log('🔐 Cabeçalho Authorization:', authHeader);

  if (!authHeader) {
    console.log('❌ Token não fornecido');
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  console.log('🔍 Token extraído:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Token decodificado com sucesso:', decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('❌ Erro ao verificar token:', err.message);
    return res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authMiddleware;
