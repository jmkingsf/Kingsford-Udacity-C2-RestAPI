export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, //"sa",
    "password": process.env.POSTGRESS_PASSWORD, //"zojjy2-rodjot-symqEr",
    "database": process.env.POSTGRESS_DATABASE, //"udagramkingsforddev",
    "host": process.env.POSTGRESS_HOST, //"udagramkingsforddev.cx0vrtj4wmei.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
  },
  "prod": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
  },
  "jwt": {
    "secret": "helloworld"
  }
}
