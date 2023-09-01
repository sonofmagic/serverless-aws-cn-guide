import serverless from 'serverless-http'
import express from 'express'
import bodyParser from 'body-parser'
import { v4 } from 'uuid'
import * as swc from '@swc/core'
import { foo } from '@icebreakers/foo'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
chromium.setHeadlessMode = true
chromium.setGraphicsMode = false
// /opt/
// https://github.com/dherault/serverless-offline/issues/1714
const app = express()
app.use(bodyParser.json())
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!',
    foo: foo()
  })
})

app.get('/path', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!'
  })
})

app.get('/uuid', (req, res) => {
  return res.status(200).send(v4())
})

app.post('/swc', async (req, res, next) => {
  // process.env["SWC_BINARY_PATH"]
  const { code } = await swc.transform(req.body.code)
  return res.status(200).end(code)
})

app.get('/chrome', async (req, res) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless
  })
  const page = await browser.newPage()
  await page.goto('https://www.baidu.com/')
  const pageTitle = await page.title()
  await browser.close()
  res.status(200).send(pageTitle)
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found'
  })
})

export const handler = serverless(app)
