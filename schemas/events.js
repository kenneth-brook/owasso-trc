export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'ename',
      type: 'string',
      title: 'Event Name',
    },
    {
      name: 'group',
      type: 'reference',
      to: [
        {
          type: 'groups',
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
