export const dbConfig = {
  mongoURI: process.env.MONGO_URI,
  mongoOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
