# Dead Letter Queue
resource "aws_sqs_queue" "queuely_dlq" {
  name = "queuely-dlq"

  message_retention_seconds = 1209600 # 14 days
}

# Main Queue
resource "aws_sqs_queue" "queuely_main" {
  name = "queuely-main"

  visibility_timeout_seconds = var.visibility_timeout
  message_retention_seconds  = var.message_retention_seconds

  receive_wait_time_seconds  = 20 # long polling

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.queuely_dlq.arn
    maxReceiveCount     = var.max_receive_count
  })
}