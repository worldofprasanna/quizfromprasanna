import json
import boto3

table_name = 'quizzes'

# Format of Question: question_id, question, type (MCQ, FillUp), options

def lambda_handler(event, context):
  quiz_id = event["quiz_id"]
  questions = []

  dynamodb = boto3.resource("dynamodb")
  table = dynamodb.Table(table_name)

  response = table.get_item(Key={"id": quiz_id})
  if "Item" in response:
      questions = response["Item"]["questions"]
      title = response["Item"]["title"]

  quiz_details = {
     'title': title,
     'questions': questions
  }
  return {
        "statusCode": 200,
        "body": quiz_details
  }

print(lambda_handler({'quiz_id': "1", "title": "Day 0 - Introduction to AWS"}, {}))