import json

# Data Store
answer_database = {"1": {"question1": "2", "question2": "3", "question3": "AWS Cloudwatch".lower()}}

def lambda_handler(event, context):
    print('Submitted for Quiz ID: '+event['quiz_id'])
    quiz_id = event['quiz_id']
    actual_answers = event['answers']
    expected_answers = answer_database[quiz_id]
    total_no_of_questions = len(expected_answers)

    score = 0
    for que in actual_answers:
        expected_answer = expected_answers.get(que)
        actual_answer = actual_answers[que].lower()
        if actual_answer == expected_answer:
          score += 1

    return {
        'statusCode': 200,
        'body': {"score": score, "percentage": round(score * 100/total_no_of_questions)}
    }

test_input_event = {
  "quiz_id": "1",
  "answers": {
    "question1": "2",
    "question2": "4",
    "question3": "AWS Cloudwatch"
  }
}

print(lambda_handler(test_input_event, {}))