export default {
  name: 'levels',
  type: 'document',
  title: 'Sponsorship Level',
  fields: [
    {
      name: 'sname',
      type: 'string',
      title: 'Sponsorship Level Name',
    },
    {
      name: 'event',
      type: 'reference',
      to: [
        {
          type: 'events',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      title: 'Description',
    },
  ],
}
