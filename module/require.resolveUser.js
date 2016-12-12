/**
 * Created by gong on 2016/12/11.
 */
require('./require.resolve.js');
delete require.cache[require.resolve('./require.resolve.js')];
require('./require.resolve.js');