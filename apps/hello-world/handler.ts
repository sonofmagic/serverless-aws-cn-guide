import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  await Promise.resolve()
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }
}
