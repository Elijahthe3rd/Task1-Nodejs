
let express =require('express');
let app= express();
const path =require('path')
app.use(express.static('NodeApp'));

app.get(express.static(path.join(__dirname ,__filename)))
const PORT= 8080;

app.listen(PORT,function(){console.log(`Server Has Started on %s`,PORT)});
