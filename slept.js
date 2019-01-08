const getSleepHours = day  =>{
  if (day === 'Monday'){
    return 8;
  }
  else if(day==='Tuesday') {
    return 5;
  }
  else if(day==='Wednesday') {
    return 7;
  }
  else if(day==='Thursday') {
    return 6;
  }
  else if(day==='Friday') {
    return 7;
  }
  else if(day==='Saturday') {
    return 9;
  }
  else if(day==='Sunday') {
    return 7;
  }
};
const getActualSleepHours = () => 
 getSleepHours('Monday')  +
 getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  

console.log(getActualSleepHours());
 console.log(getSleepHours('Sunday'));

const getIdealSleepHours = () =>{
const idealHours = 4;
return idealHours *7;
};
console.log(getIdealSleepHours());

const calculateSleepDebt = ()  => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours===idealSleepHours) {
    console.log('perfect amount of sleep you slept enough' +  idealSleepHours );
  }
  else if (actualSleepHours>idealSleepHours) {
    console.log('you slept ' + (actualSleepHours - idealSleepHours) +' hours. You slept too long');
  }
  else {
    console.log('get some rest');
  }
};
console.log(calculateSleepDebt());
