export interface AchievementData {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  image?: string;
  imageAlt?: string;
  event: string;
  points: string[];
  tags: string[];
}

export const AchievementsCollectionConfig = {
  slug: 'achievements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'badge', 'event'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      required: true,
    },
    {
      name: 'event',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'imageAlt',
      type: 'text',
    },
    {
      name: 'points',
      type: 'array',
      fields: [{ name: 'point', type: 'text' }],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
  ],
};
