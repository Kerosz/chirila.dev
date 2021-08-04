export default function pluralWord(count: number, word: string): string {
  if (count === 1) {
    return count + ' ' + word;
  }

  return count + ' ' + word + 's';
}
