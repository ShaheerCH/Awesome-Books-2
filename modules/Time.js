import { DateTime } from './luxon.js';

const showTime = () => {
  const newDateTime = `${DateTime.now().toLocaleString(
    DateTime.DATE_FULL,
  )}, ${DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`;
  const time = document.getElementById('time');
  time.textContent = newDateTime;
  setTimeout(() => {
    showTime();
  }, 500);
};

export default showTime;
