const fs = require("fs");
const path = require("path");

const logActivity = (action)=>(req,res,next)=>{
  const logMessage = `${new Date().toISOString()} - ${req.user?.id || "Guest"} - ${action} - ${req.originalUrl} \n`;

  fs.appendFileSync(path.join(__dirname,"../activity.log"),logMessage);
  next();
}

module.exports = logActivity;