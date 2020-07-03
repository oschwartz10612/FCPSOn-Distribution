# FCPSON-Distribution
Robinson FCPSON Distribution App

[![Build Status](https://travis-ci.com/oschwartz10612/FCPSOn-Distribution.svg?branch=master)](https://travis-ci.com/oschwartz10612/FCPSOn-Distribution)

## Spinning It Up

Easy deployment can be done using Heroku. Click the button below and follow the steps to set up a free instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

The web UI can be accessed at the root URL provided by Heroku or by adding `/4` or `/6` to select the desired number of boxes respectively.

## The API

A `post` request can be made to the root URL with the following JSON body:

```json
{
  "location": <Location String>,
  "kiosk": <Kiosk #>
}
```

Where `<Location String>` is any string containing the location of the item and `<Kiosk #>` is a number 1-6 representing the corresponding icon that should display the location. 

### Using With Google Sheets

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
  UrlFetchApp.fetch('<Your Heroku URL>', options);
  return "Done";
}
```

3. Change the Heroku URL to the URL of the instance.

4. Save the script

5. Use the function in the Sheet.  It must be present in a new column for every column of checkboxes. `<checkbox>` should be a reference to a cell containing a checkbox. When it is checked the function will fire. `<data>` should be a cell containing the data sent to the kiosk display. `<kiosk>` is a number 1-6 corresponding to the colors.

```
=IF(<checkbox>,updateBoard(<data>,<kiosk>))
```