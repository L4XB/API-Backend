const mongoose = require('mongoose')

mongoose.connect(
    `mongodb+srv://Lukas3009:hxNxo86FSmcUL2el@cluster0.nsxbz.mongodb.net/chaining`, 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

