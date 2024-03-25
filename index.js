// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42; 
    const distance = Math.abs(location - hq);
    return distance;
  }

  console.log(distanceFromHqInBlocks(50)); 

  function distanceFromHqInFeet(location) {
    const blockLengthFeet = 264; 
    const hq = 42; 
    const distanceInBlocks = Math.abs(location - hq);
    const distanceInFeet = distanceInBlocks * blockLengthFeet;
    return distanceInFeet;
  }
  console.log(distanceFromHqInFeet(50));

  function distanceTravelledInFeet(start, destination) {
    const blockLengthFeet = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLengthFeet;
    return distanceInFeet;
  }

  console.log(distanceTravelledInFeet(30, 50));
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else if (distanceInFeet > 2500) {
      return 'Cannot travel more than 2500 feet';
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    }
  }
  
  