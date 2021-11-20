exports.root = (req, res) => {
  res.json({
    msg: "Hello world!",
    NODE_ENV: process.env.NODE_ENV
  })
  return
}