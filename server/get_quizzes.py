import boto3

table_name = 'quizzes'

def scan_table(dynamo_client, *, TableName, **kwargs):
    paginator = dynamo_client.get_paginator("scan")

    for page in paginator.paginate(TableName=TableName, **kwargs):
        yield from page["Items"]

def lambda_handler(event, context):
  quizzes = []
  dynamo_client = boto3.client("dynamodb")
  for item in scan_table(dynamo_client, TableName=table_name):
      parsed_item = {"title": item['title']['S'], "id": item.get('id', {}).get('S', -1), "noOfQuestions": item['noOfQuestions']['N'], "difficultyLevel": item['difficultyLevel']['S'], "imageURL": item['imageURL']['S']}
      quizzes.append(parsed_item)

  return {
    "statusCode": 200,
    "body": {"quizzes": quizzes}
  }

print(lambda_handler({}, {}))