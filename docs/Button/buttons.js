function func_1() {
  alert('Button 1 was pressed!');
}

function func_2() {
  setTimeout(alert, 2000, 'Button 2 was pressed 2 seconds ago!');
}

const btn_1 = document.getElementById('alert_btn');
const btn_2 = document.getElementById('delayed_alert_btn');

btn_1.addEventListener('click', func_1);
btn_2.addEventListener('click', func_2);
