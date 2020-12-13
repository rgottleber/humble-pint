// sanityClient.js

import sanityClient from '@sanity/client'

const client = sanityClient({
 projectId: 'w6m3k4m2',
 dataset: 'production',
 useCdn: false,
})

export default client