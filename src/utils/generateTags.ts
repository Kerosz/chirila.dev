type TagPartial = { tags: string[] };

export default function generateTags<T extends TagPartial = TagPartial>(
  rawData: T[]
): string[] {
  const tagSet = new Set<string>();

  rawData.forEach((entry) => {
    entry.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet);
}
