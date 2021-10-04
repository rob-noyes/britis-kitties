import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'd1hzrbl7',
  dataset: 'production',
  apiVersion: '2021-10-04',
  useCdn: true,
});
