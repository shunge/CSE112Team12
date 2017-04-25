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

- Create branch off `Dev`
- Develop on that branch
- Merge back into Dev
- During Saturday meetings we'll merge `Dev` with `Master`

### Deployment Flow
From GCP Shell

- pull `master`
- gcloud app deploy --project <project_name>
- gets deployed to https://cse112team12.appspot.com/
