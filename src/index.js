
let express =require('express');
let app= express();
const path =require('path')
const PORT= 8080;
app.use(express.static('NodeApp'));

app.get(express.static(path.join(__dirname ,__filename)))


app.listen(PORT,function(){console.log(`Server Has Started on %s`,PORT)});
