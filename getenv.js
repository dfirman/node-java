var env = process.env.NODE_ENV;
if(env !== "development"){
  env = ""
}
process.stdout.write(env);
