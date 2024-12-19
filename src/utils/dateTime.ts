export function getTimeString(dateObject: Date): string {
  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');
  const seconds = dateObject.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
