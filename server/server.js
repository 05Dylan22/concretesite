const express = require("express")
const app = express()
const nodemailer = require("nodemailer")
const cors = require("cors")
const bodyParser = require("body-parser")
const success = "success"

app.use(cors({
  origin: "*"
}))

app.use(express.json())
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anderson.dylan.522@gmail.com",
    pass: "dxfj gxct yfkf qzfd"
  }
 
})

app.post("/", (req, res) => {

  let mailOptions = {
    from: req.body.email,
    to: "anderson.dylan.522@gmail.com",
    subject: "Concrete Inquiry",
    text:
      req.body.inquiry + "\n" + "\n" +
      req.body.firstName + "\n" +
      req.body.email + "\n" +
      req.body.phoneNumber
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err)
      res.send("err")
    } else {
      res.send(JSON.stringify(success))
    }
  })
})

app.listen(5000, (req, res) => {
  console.log("listen of 5000")
})