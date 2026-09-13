export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

export const ProjectsCollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'liveUrl', 'codeUrl'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'image',
      type: 'text',
      required: true,
    },
    {
      name: 'liveUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'codeUrl',
      type: 'text',
      required: true,
    },
  ],
};
