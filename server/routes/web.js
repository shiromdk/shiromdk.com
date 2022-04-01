const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ status: false, message: 'Server Okay' })
})

router.post('/auth', async(req,res)=>{
  
})

router.get('/list', async (req,res)=>{
    const list = [
        `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
        <h1 style="color: #5e9ca0;">fYou can edit <span style="color: #2b2301;">this demo</span> text!</h1>
        <h2 style="color: #2e6c80;">How to use the editor:</h2>
        <p>Paste your documents in the visual editor on the left or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p>
        <p>Click the <span style="background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;">Clean</span> button to clean your source code.</p>
        <p>&nbsp;</p>`,
        `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
        <h1 style="color: #5e9ca0;">fYou can edit <span style="color: #2b2301;">this demo</span> text!</h1>
        <h2 style="color: #2e6c80;">How to use the editor:</h2>
        <p>Paste your documents in the visual editor on the left or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p>
        <p>Click the <span style="background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;">Clean</span> button to clean your source code.</p>
        <p>&nbsp;</p>`,
        `<!-- #######  YAY, I AM THE SOURCE EDITOR! #########-->
        <h1 style="color: #5e9ca0;">fYou can edit <span style="color: #2b2301;">this demo</span> text!</h1>
        <h2 style="color: #2e6c80;">How to use the editor:</h2>
        <p>Paste your documents in the visual editor on the left or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p>
        <p>Click the <span style="background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;">Clean</span> button to clean your source code.</p>
        <p>&nbsp;</p>`
    ]
    console.log(list)
    res.json(list)
})

// router.post('/test', (req, res) => {
//   // res.redirect(process.env.WEBAPP_URL);
//   res.send('SERVER ALIVE')
// })

module.exports = router
