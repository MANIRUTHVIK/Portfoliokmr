export interface ExperienceData {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  statusBadge?: string;
  summary: string;
  pillars?: {
    title: string;
    description: string;
  }[];
  bullets?: string[];
  highlight: boolean;
}

export const ExperienceCollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'period', 'statusBadge'],
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'statusBadge',
      type: 'text',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'pillars',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'bullets',
      type: 'array',
      fields: [{ name: 'point', type: 'text' }],
    },
    {
      name: 'highlight',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
