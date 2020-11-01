const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vts:predators@cluster0.1yute.mongodb.net?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
