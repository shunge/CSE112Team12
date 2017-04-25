# CSE112Team12
## Onboarding
### Setup
```bash
git clone https://github.com/CSE112Spring17/CSE112Team12.git
cd CSE112Team12
npm install
```
### Viewing Application
Running `npm start` will have your application listen on localhost:3000

### Development Flow
* Create branch off `Dev`
* Develop on that branch
	* Open one terminal and run `npm run bundle`
	* Open another terminal and run `npm run dev`
	* Doing this will allow you to make changes and view them immediately on localhost:3000
* Merge back into Dev
* During Saturday meetings we'll merge `Dev` with `Master`

### Writing Tests
* Add tests to CSE112Team12/test/test.js
* Will soon refractor to allow for encapsulated testing

### Running Tests
* `npm test`

### Deployment Flow
From GCP Shell

- `cd` to project directory
- pull `master`
- gcloud app deploy --project <project_name>
- gets deployed to https://cse112team12.appspot.com/
