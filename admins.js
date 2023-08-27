const adminUser = require('./models/adminUser');
const mongoose = require('mongoose');

var adminuser = new adminUser({
    email: 'sakethmukkanti58943@gmail.com',
    password: 'mvsaketh',
    role: 'admin'
});

const email = "mukkanti@iitg.ac.in";
const password = "Nuc24553";
const role = "restricted";
const dbURI = 'mongodb+srv://Saketh:mvsaketh@cluster0.ifqge.mongodb.net/interview_prep';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(async (result) => {
    console.log('connection made!!');
    adminuser.save().then(function(){
        console.log("admin created suceesfully");
    });
    const adminuser_ = await adminUser.create({ email, password, role });
    console.log(adminuser_);
    })
  .catch((err) => console.log(err));



