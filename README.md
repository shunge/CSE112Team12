# CSE112Team12
## Onboarding
### Setup
```bash
git clone https://github.com/CSE112Spring17/CSE112Team12.git
cd CSE112Team12
npm install
```
### Viewing
Running `node index.js` will have your application listen on localhost:3000

### Development Flow
When working on bugs or features

- `git checkout Dev`
- `git checkout -b <branch_name>`
- Develop on that branch
- Merge back into Dev
- During Saturday meetings we'll merge `Dev` with `Master`

### Deployment Flow
From GCP Shell

- pull `master`
- gcloud app deploy --project <project_name>
- gets deployed to https://cse112team12.appspot.com/

## Usage 

### IsValidPhoneNumber()
This function checks if the input value is a correctly entered phone number.
The user will input a string, if it is a valid phone number, it will return "The phone number is valid". If not, it will return "The phone number is invalid".

### SetFormat()
The user can set the accepting phone format by inputting an example. The format will be used for IsValidPhoneNumber().
