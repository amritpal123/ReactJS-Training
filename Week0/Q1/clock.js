function updateClock() {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const hours = (now.getHours() % 12) || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    $('#greeting').html(`${greetings(now)}`);
    $('#hyphen').html("&mdash;");
    $('#clock').html(`${hours}:${minutes}:${seconds} ${ampm}`);  
    $('#day').html(`${date} ${month} ${year}`);
}

  function greetings(now) {
        const curHr = now.getHours();

        if (curHr < 12) {
            return 'Good Morning';
        } else if (curHr < 18) {
            return'Good Afternoon';
        } else {
            return'Good Evening';
        }
  }

  setInterval(updateClock, 1000);
  updateClock();