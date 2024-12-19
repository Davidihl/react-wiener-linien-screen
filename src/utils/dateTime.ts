export function getTimeString(
  dateObject: Date,
  withSeconds: boolean = true,
): string {
  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');
  const seconds = dateObject.getSeconds().toString().padStart(2, '0');

  if (!withSeconds) {
    return `${hours}:${minutes}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

export function convertTimestampToTimeString(timestamp: string) {
  const convertedTimestamp = new Date(timestamp);
  return getTimeString(convertedTimestamp);
}
