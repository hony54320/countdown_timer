import inquirer from 'inquirer';

async function countdownTimer() {
  const { minutes } = await inquirer.prompt([
    {
      type: 'number',
      name: 'minutes',
      message: 'Enter the number of minutes for the countdown:',
    },
  ]);

  let seconds = minutes * 60;

  const intervalId = setInterval(() => {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;

    console.log(`Time Remaining: ${minutesLeft} minutes ${secondsLeft} seconds`);

    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      console.log('Countdown complete!');
    }
  }, 1000);
}

countdownTimer();
