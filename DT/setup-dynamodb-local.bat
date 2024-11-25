@echo off
:: Check if DynamoDB Local is running on localhost:8000
echo Checking if DynamoDB Local is running...
curl -s http://localhost:8000 >nul

:: If DynamoDB Local is not running, start it
if %errorlevel% neq 0 (
    echo DynamoDB Local is not running, starting it...
    echo Please ensure Java is installed and the DynamoDBLocal.jar is in the current directory.
    start java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
    echo DynamoDB Local has been started.
) else (
    echo DynamoDB Local is already running.
)

:: Install required Node.js packages (if not already installed)
echo Installing required Node.js packages...
npm install

:: Run the DynamoDB script
echo Running DynamoDB script...
node dynamodb.js
pause
