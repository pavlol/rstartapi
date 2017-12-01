const helpRoutes = require('./help_routes');
module.exports = function(app, db) {
  helpRoutes(app, db);
  // Other route groups could go here, in the future
};
