COMMANDS TO ZIP FILES BEFORE UPLOAD TO SERVER 


zip -r ../ndk-app.zip . -x "node_modules/*" ".git/*" "tests/*" "vendor/*"
zip -r ../vendor.zip vendor


npm run build 

//for updates [production Then Compress public and upload to server]
