import json

# Datastore
title = "Quiz for Day 11: Logging and Monitoring in AWS"
questions = [
  {
    "question": "",
    "type": "multiple_choice",
    "options": []
  },
  {
    "question": "",
    "type": "multiple_choice",
    "options": []
  },
  {
    "question": "",
    "type": "multiple_choice",
    "options": []
  },
  {
    "question": "",
    "type": "multiple_choice",
    "options": []
  },
]
all_quizzes = {
  '1': {
    "title": title,
    "questions": questions
  }
}

def lambda_handler(event, context):

  quiz_id = event['quiz_id']
  quiz_details = all_quizzes[quiz_id]
  return {
        "statusCode": 200,
        "body": quiz_details
  }

print(lambda_handler({}, {}))