function authRole(role) {
  return (req, res, next) => {
    try {
      if (req.body.role && req.body.role !== role) {
        throw 'Not Allowed';
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!'),
      });
    }
  };
}

module.exports = {
  authRole,
};
