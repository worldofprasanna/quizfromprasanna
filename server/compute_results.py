import json
import boto3
from datetime import datetime

table_name = 'quizzes'
score_table_name = 'quiz-score'

def lambda_handler(event, context):
    print('Submitted for Quiz ID: '+event['quiz_id'])
    quiz_id = event['quiz_id']
    actual_answers = event['answers']
    user_id = event['user_id']

    dynamodb = boto3.resource("dynamodb")
    table = dynamodb.Table(table_name)
    score_table = dynamodb.Table(score_table_name)

    response = table.get_item(Key={"id": quiz_id})
    if "Item" in response:
      expected_answers = response["Item"]["answers"]
    else:
       raise Exception("No Answer found for the Quiz")

    total_no_of_questions = len(expected_answers)

    score = 0
    for que in actual_answers:
        expected_answer = expected_answers.get(que).lower()
        actual_answer = actual_answers[que].lower()
        if actual_answer == expected_answer:
          score += 1

    percentage = round(score * 100/total_no_of_questions)

    score_table.put_item(Item={"user_id": user_id, "quiz_id": quiz_id, "score": score, "percentage": percentage, "quizTakenAt": datetime.now().strftime("%m/%d/%Y, %H:%M:%S")})
    return {
        'statusCode': 200,
        'body': {"score": score, "percentage": percentage}
    }

test_input_event = {
  "user_id": "prasanna",
  "quiz_id": "1",
  "title": "Day 0 - Introduction to AWS",
  "answers": {
    "question1": "2",
    "question2": "3",
    "question3": "AWS Cloudwatch"
  }
}

print(lambda_handler(test_input_event, {}))