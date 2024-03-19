# Data Store
quizzes = [
  {
    "id": "1",
    "title": "Quiz for Day 11: Logging and Monitoring in AWS"
  },
  {
    "id": "2",
    "title": "Quiz for Day 10: Costs in AWS"
  },
  {
    "id": "3",
    "title": "Quiz for Day 9: Hosting static site using AWS CloudFront"
  },
]

def lambda_handler(event, context):
  return {
        "statusCode": 200,
        "body": {"quizzes": quizzes}
  }

print(lambda_handler({}, {}))