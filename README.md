Run node modules dynamically via REST API.  
Call 'http://localhost:3000/module/:moduleName' to run each module  
  
You need to bind a modules directory to /usr/src/app/modules  
which should contain modules.mjs files.  
Each module should export a default function. 
