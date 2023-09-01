/**
 * @typedef {import('@serverless/typescript').AWS} AWS
 * @type {AWS}
 */
const serverlessConfiguration = {
  service: 'aws-node-ts-hello-world',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'cn-northwest-1'
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          httpApi: {
            method: 'get',
            path: '/'
          }
        }
      ]
    }
  },
  plugins: ['serverless-esbuild', 'serverless-offline'],
  custom: {
    esbuild: {
      sourcemap: true
    },
    'serverless-offline': {
      noPrependStageInUrl: true,
      noAuth: true
    }
  }
}

module.exports = serverlessConfiguration
