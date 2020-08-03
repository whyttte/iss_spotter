/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

// commented out because not needed for the function
// const {fetchMyIP} = require('./iss');
// const {fetchCoordsByIP} = require('./iss');
// const {fetchISSFlyOverTimes} = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const exampleCoords = {latitude: '49.27670', longitude: '-123.13000'}
//************************************************************************************************************************ */
// fetchMyIP ((error, ip) => {
//   if (error) {
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });
//************************************************************************************************************************ */

//********************************************************************************************************************** */
// fetchCoordsByIP ((error, {latitude, longitude}) => {  // {latitude, longitude} === coords
//   if (error) {
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates: ', {latitude, longitude});
// });
//************************************************************************************************************************ */

//************************************************************************************************************************ */
// fetchISSFlyOverTimes ({latitude, longitude}, (error, passTimes) => {
//   if (error) {
//     console.log("it didn't work", error);
//     return;
//   }
//   console.log('It worked! Returned information: ', passTimes);
// });
//*********************************************************************************************************************** */


/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
