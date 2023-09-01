import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { foo } from '@icebreakers/foo'

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  await Promise.resolve()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        data: foo(),
        input: event
      },
      null,
      2
    )
  }
}
