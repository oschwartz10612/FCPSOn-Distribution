
# FCPSOn-Distribution
Robinson FCPSOn Distribution App
[![Build Status](https://travis-ci.com/oschwartz10612/FCPSOn-Distribution.svg?branch=master)](https://travis-ci.com/oschwartz10612/FCPSOn-Distribution)

## Installation
1. Download and install [NodeJS]([https://nodejs.org/en/](https://nodejs.org/en/))
2. Clone or download this repository
3. Open command line in the directory and run the following command
```bash
npm install
```
### Google Sheet
1. Create a new Google Sheet and create a new script. Go to Tools > Script Editor.
2. Paste in the following code:
```javascript
function updateBoard(location, kiosk) {
  var data = {
    'location': location,
    'kiosk': kiosk
  };
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch('<Your IP Here>', options);
  return "Done";
}
```
3. Change the IP to the IP of the server
4. Save the script
5. Use the function below in the Sheet.  It must be present in a new column for every column of checkboxes. |checkbox| should be a reference to a cell containing a checkbox. When it is checked the function will fire. |data| should be a cell containing the data sent to the kiosk display. |kiosk| is a number 1-6 corresponding to the colors.
```
=IF(|checkbox|,updateBoard(|data|,|kiosk|))
```
## Usage
1. Open the command line in the directory and run the following command to start the server
```bash
npm run start
```
2. Navigate to the IP of the server on as many computers as necessary. For example:
```http
http://192.168.1.10
```
Note that you can navigate to /4 or /6 to adjust the number of boxes.

3. Close the command prompt to close the server.