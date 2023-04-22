const mongoose = require('mongoose')

mongoose.connect(
    `ur db`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true

    }
  );
    
