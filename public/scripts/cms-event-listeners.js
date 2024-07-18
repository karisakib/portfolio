// import CMS from 'decap-cms-app';

// // Register an event listener for entry creation
// CMS.registerEventListener({
//   name: 'preSave',
//   handler: ({ entry }) => {
//    console.log(entry.get('slug'));
//    const titleSlug = entry.getIn(['data', 'title'], '').toLowerCase().replace(/[']/g, '').replace(/[.]/g, '-').replace(/[\s]/g, '-')
//    const slug = entry.get('data').set('slug', titleSlug);
//    console.log(slug);
//   }
// });

// // CMS.registerEventListener({
// //  name: 'preSave',
// //  handler: ({ entry }) => {
// //   if (entry.get('slug')) {
// //     return entry.get('data').set('titleslug', entry.get('slug'));
// //   } else {
// //     // you can use any relevant field/logic for generating the initial slug
// //     const titleSlug = entry.getIn(['data', 'title'], '').toLowerCase().replace(/[']/g, '').replace(/[.]/g, '-').replace(/[\s]/g, '-')
// //     return entry.get('data').set('titleslug', titleSlug);
// //   }
// //  },
// // });


// /**
//  * I HAVE NO IDEA WHY THIS IS CAUSING ISSUES
//  */
// // Initialize CMS
// CMS.init({config:"/admin/config.yml"});