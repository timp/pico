var on = false;
var red = false;
var green = true;
var pressed = true;
setInterval(function() {
  pressed = digitalRead(BTN);
  if (pressed) { 
    on = !on;
    if (on) {
      red = !red;
      green = !green;
      LED1.write(red);
      LED2.write(green);
    } else { 
      LED1.write(false);
      LED2.write(false);
    }
  }
}, 70);
