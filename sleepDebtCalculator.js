function getSleepHours(day){
  switch(day){
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 7.5;
    break;
    case 'wednesday':
    return 8;
    break;
    case 'thursday':
    return 7;
    break;
    case 'friday':
    return 6;
    break;
    case 'saturday':
    return 6;
    break;
    case 'sunday':
    return 8;
    break;
    default:
    return 8;
  }
}

function getActualSleepHours(){
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');
}
function getIdealSleepHours(idealHours){
  return idealHours*7;
}
function calculateSleepDebt(){
  var actualSleepHours=getActualSleepHours();
  var idealSleepHours=getIdealSleepHours(7.5);
  var hoursDifference;
  if(actualSleepHours===idealSleepHours){
    hoursDifference = 0;
    console.log('User got the perfect amount of sleep');
  }
  else if(actualSleepHours>idealSleepHours){
    hoursDifference = actualSleepHours-idealSleepHours;
    console.log(`User got ${hoursDifference} hours more sleep than needed`);
  }
  else if(actualSleepHours<idealSleepHours){
    hoursDifference = idealSleepHours-actualSleepHours;
    console.log(`User needs to get some rest. They got ${hoursDifference} hours less than they needed`);
  }
}
calculateSleepDebt();
