var context = require.context('<%= jsSrcPath %>', true, /.spec\.js$/);
context.keys().forEach(context);
