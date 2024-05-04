# glov-backend-caseStudy

- AWS Lambda serverless cloud backend for LLM requests to chat-gpt API.

  To use and deploy the backend, you will need your own OPENAI_API_KEY. Set this as an Environment Variable at the Configuration tab of your Lambda function.
  Then, pass your Lambda Function URL to your fetch request. 

  In order to utilize Lambda serverless API, make a POST request to function url and make sure that the body is set to the following format:
  
{
    "value": [
        {
            "message": "string",
            "role": "user"
        }
    ]
}
