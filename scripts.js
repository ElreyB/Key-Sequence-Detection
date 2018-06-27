const pressed = [];
const secertCode = 'elrey';
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secertCode.length - 1, pressed.length - secertCode.length)
  if (pressed.join('').includes(secertCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});
