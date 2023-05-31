export default {
  name: 'sponsors',
  type: 'document',
  title: 'Sponsors',
  fields: [
    {
      name: 'cname',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'conname',
      type: 'string',
      title: 'Contact Name',
    },
    {
      name: 'street',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'zip',
      type: 'string',
      title: 'Zip Code',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'description',
      type: 'richText',
      title: 'Notes',
    },
  ],
}
