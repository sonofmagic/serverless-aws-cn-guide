import type { Handler } from 'aws-lambda'
// 假如你 npm run invoke:local
// 这里的 event 里的值就是 event.json
export const run: Handler<{ a: number }> = (event, context) => {
  const time = new Date()
  console.log(`Your cron function "${context.functionName}" ran at ${time}`)
}
