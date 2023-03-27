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
    {
      name: 'unlimited',
      type: 'boolean',
      title: 'This Listing Is Unlimited',
    },
    {
      name: 'available',
      type: 'number',
      title: 'Number Available',
      validation: (Rule) => Rule.positive(),
    },
    {
      name: 'cost',
      type: 'number',
      title: 'Cost for Sponsorship',
      validation: (Rule) => Rule.positive(),
    },
  ],
}
