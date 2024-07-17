import CMS from 'decap-cms-app';

// Register an event listener for entry creation
CMS.registerEventListener({
  name: 'entryDraftCreate',
  handler: ({ entry }) => {
    console.log('New entry created:', entry);
  }
});

// Register an event listener for entry update
CMS.registerEventListener({
  name: 'entryDraftUpdate',
  handler: ({ entry }) => {
    console.log('Entry updated:', entry);
  }
});

// Initialize CMS
CMS.init();