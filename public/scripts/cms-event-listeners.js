// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;

// Usage with import from npm package
import CMS from 'decap-cms-app';

// Function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Register the preSave event listener
CMS.registerEventListener({
 name: 'preSave',
 handler: ({ entry }) => {
   // Get the title from the entry
   const title = entry.getIn(['data', 'title']);
   console.log('Title:', title);
   
   // Generate the slug
   const slug = generateSlug(title);
   console.log('Generated Slug:', slug);

   // Set the slug in the entry data and return the modified entry
   return entry.setIn(['data', 'slug'], slug);
 }
});


// Initialize CMS
// CMS.init({ config: "../admin/config.yml" });
