export default {
  name: 'groups',
  type: 'document',
  title: 'Event Groups',
  fields: [
    {
      name: 'gname',
      type: 'string',
      title: 'Event Group Name',
    },
    {
      name: 'description',
      type: 'richText',
      title: 'Description',
    },
  ],
}
