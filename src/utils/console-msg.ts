export default function consoleMessage() {
  const message =
    '%c Hi programers 👋! \n\n Welcome to my space, for collaborations shoot me an email \n\n andrei@chirila.dev';
  const styles = [
    `font-size: 12px`,
    `font-family: monospace`,
    `background: white`,
    `display: inline-block`,
    `color: black`,
    `padding: 8px 19px`,
    `border: 1px dashed;`,
  ].join(';');

  console.log(message, styles);
}
