export default function pluralWord(
  count: number,
  word: string,
  withNumber = true
): string {
  if (count === 1) {
    if (withNumber) return count + ' ' + word;

    return word;
  }

  if (withNumber) return count + ' ' + word + 's';

  return word + 's';
}
