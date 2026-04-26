variable "aws_region" {
  default = "ap-south-1"
}

variable "message_retention_seconds" {
  default = 86400 # 1 day
}

variable "visibility_timeout" {
  default = 120
}

variable "max_receive_count" {
  default = 3
}