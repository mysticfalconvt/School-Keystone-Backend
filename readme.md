# This is the school dashboard backend.  
You will need to connect this to mongoDB for a database.  Using a free plan DB is fine.  Create one and they will give you a URL to put in to the ENV to connect it.  
Mail variables are for a mailtrap email so it doesn't actually send anything.  

To setup use 
```
npm install 
npm run dev 
```

you will need a .env file including this for local dev environment
```
COOKIE_SECRET="this can be anything"
DATABASE_URL= This needs to be the URL to a mongoDB atlas database.  
MAIL_HOST="smtp.mailtrap.io"
MAIL_PORT=2525
MAIL_USER=95a89f0b3bcfd1@mailtrap.io
MAIL_PASS=ad480b5b8394c4
FRONTEND_URL="http://localhost:7777"
```