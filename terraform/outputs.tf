output "sqs_queue_url" {
  value = aws_sqs_queue.queuely_main.id
}

output "sqs_dlq_url" {
  value = aws_sqs_queue.queuely_dlq.id
}
