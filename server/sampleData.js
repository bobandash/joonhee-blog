// ENSURE THAT YOU CHANGE THE ADMIN DATA TO FIT YOUR NEEDS
const Admin = require('./models/admin');
const Comment = require('./models/comments');
const MailingList = require('./models/mailing-list');
const Post = require('./models/posts');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const db_connect = require('./server/utils/db.js');
const mongoose = require('mongoose');


populateDB();

async function populateDB(){
  await db_connect();
  await Promise.all([
    addAdmin(), addMailingList(), addPostsAndComments()
  ])
  await mongoose.connection.close();
}

async function addAdmin(){
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const newAdmin = new Admin({
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword
  })
  await newAdmin.save();
}


async function addMailingList(){
  const email1 = new MailingList({
    email: "random@gmail.com"
  })
  const email2 = new MailingList({
    email: "villagerA@gmail.com"
  })
  const email3 = new MailingList({
    email: "villagerB@gmail.com"
  })
  await email1.save();
  await email2.save();
  await email3.save();
}

async function addPostsAndComments(){
  const testPost = new Post({
    title: "Welcome to Gambia",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pulvinar mattis nunc sed blandit. Sit amet volutpat consequat mauris nunc congue. In hendrerit gravida rutrum quisque. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Est ante in nibh mauris cursus mattis molestie. Volutpat commodo sed egestas egestas fringilla phasellus. Commodo elit at imperdiet dui. In tellus integer feugiat scelerisque varius morbi enim nunc.
    Massa ultricies mi quis hendrerit dolor magna eget est. Vel pretium lectus quam id leo in vitae turpis massa. Lorem ipsum dolor sit amet. Porttitor eget dolor morbi non arcu risus. Massa massa ultricies mi quis hendrerit dolor magna eget. Dolor magna eget est lorem ipsum dolor sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Vitae tortor condimentum lacinia quis vel. Justo eget magna fermentum iaculis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ante metus dictum at tempor commodo ullamcorper. Faucibus et molestie ac feugiat. Mattis nunc sed blandit libero volutpat. Enim nunc faucibus a pellentesque sit amet. Eu mi bibendum neque egestas congue quisque egestas.
    Ut diam quam nulla porttitor massa id neque. Viverra aliquet eget sit amet tellus cras adipiscing enim. Ac tortor dignissim convallis aenean. Quis eleifend quam adipiscing vitae. Viverra orci sagittis eu volutpat odio facilisis mauris sit. At lectus urna duis convallis convallis tellus id interdum. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Semper auctor neque vitae tempus quam pellentesque. Vulputate ut pharetra sit amet aliquam id. Malesuada fames ac turpis egestas maecenas pharetra. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Varius duis at consectetur lorem donec massa sapien faucibus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Aliquet bibendum enim facilisis gravida. Neque sodales ut etiam sit amet nisl purus in mollis. Integer enim neque volutpat ac tincidunt. Suspendisse potenti nullam ac tortor vitae purus faucibus.
    Ultrices eros in cursus turpis. Sit amet consectetur adipiscing elit duis. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sit amet consectetur adipiscing elit. Feugiat nisl pretium fusce id velit. Tortor condimentum lacinia quis vel eros donec ac. Viverra maecenas accumsan lacus vel. Neque laoreet suspendisse interdum consectetur libero id faucibus. Ornare quam viverra orci sagittis. Et sollicitudin ac orci phasellus egestas tellus. Donec enim diam vulputate ut pharetra sit amet aliquam. Pretium quam vulputate dignissim suspendisse. Purus sit amet volutpat consequat. Maecenas sed enim ut sem. Ut ornare lectus sit amet est placerat in. Vel facilisis volutpat est velit egestas dui id. Blandit massa enim nec dui nunc mattis. Lacus sed viverra tellus in hac habitasse platea dictumst. Eleifend mi in nulla posuere sollicitudin aliquam.
    Sapien faucibus et molestie ac feugiat sed lectus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Malesuada proin libero nunc consequat interdum varius. Etiam non quam lacus suspendisse faucibus. Duis at tellus at urna. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Et ligula ullamcorper malesuada proin libero. Leo integer malesuada nunc vel risus commodo viverra maecenas. Euismod nisi porta lorem mollis. Ultrices dui sapien eget mi proin sed libero enim. Vitae sapien pellentesque habitant morbi tristique senectus et. A pellentesque sit amet porttitor eget dolor morbi non arcu. Amet porttitor eget dolor morbi non arcu risus quis. Suspendisse in est ante in nibh mauris cursus mattis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.`,
    summary: "that was some long Lorem text",
  })
  const testPost2 = new Post({
    title: "I Met My Sponsor Family",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pulvinar mattis nunc sed blandit. Sit amet volutpat consequat mauris nunc congue. In hendrerit gravida rutrum quisque. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Est ante in nibh mauris cursus mattis molestie. Volutpat commodo sed egestas egestas fringilla phasellus. Commodo elit at imperdiet dui. In tellus integer feugiat scelerisque varius morbi enim nunc.
    Massa ultricies mi quis hendrerit dolor magna eget est. Vel pretium lectus quam id leo in vitae turpis massa. Lorem ipsum dolor sit amet. Porttitor eget dolor morbi non arcu risus. Massa massa ultricies mi quis hendrerit dolor magna eget. Dolor magna eget est lorem ipsum dolor sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Vitae tortor condimentum lacinia quis vel. Justo eget magna fermentum iaculis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ante metus dictum at tempor commodo ullamcorper. Faucibus et molestie ac feugiat. Mattis nunc sed blandit libero volutpat. Enim nunc faucibus a pellentesque sit amet. Eu mi bibendum neque egestas congue quisque egestas.
    Ut diam quam nulla porttitor massa id neque. Viverra aliquet eget sit amet tellus cras adipiscing enim. Ac tortor dignissim convallis aenean. Quis eleifend quam adipiscing vitae. Viverra orci sagittis eu volutpat odio facilisis mauris sit. At lectus urna duis convallis convallis tellus id interdum. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Semper auctor neque vitae tempus quam pellentesque. Vulputate ut pharetra sit amet aliquam id. Malesuada fames ac turpis egestas maecenas pharetra. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Varius duis at consectetur lorem donec massa sapien faucibus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Aliquet bibendum enim facilisis gravida. Neque sodales ut etiam sit amet nisl purus in mollis. Integer enim neque volutpat ac tincidunt. Suspendisse potenti nullam ac tortor vitae purus faucibus.
    Ultrices eros in cursus turpis. Sit amet consectetur adipiscing elit duis. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Sit amet consectetur adipiscing elit. Feugiat nisl pretium fusce id velit. Tortor condimentum lacinia quis vel eros donec ac. Viverra maecenas accumsan lacus vel. Neque laoreet suspendisse interdum consectetur libero id faucibus. Ornare quam viverra orci sagittis. Et sollicitudin ac orci phasellus egestas tellus. Donec enim diam vulputate ut pharetra sit amet aliquam. Pretium quam vulputate dignissim suspendisse. Purus sit amet volutpat consequat. Maecenas sed enim ut sem. Ut ornare lectus sit amet est placerat in. Vel facilisis volutpat est velit egestas dui id. Blandit massa enim nec dui nunc mattis. Lacus sed viverra tellus in hac habitasse platea dictumst. Eleifend mi in nulla posuere sollicitudin aliquam.
    Sapien faucibus et molestie ac feugiat sed lectus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Malesuada proin libero nunc consequat interdum varius. Etiam non quam lacus suspendisse faucibus. Duis at tellus at urna. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Et ligula ullamcorper malesuada proin libero. Leo integer malesuada nunc vel risus commodo viverra maecenas. Euismod nisi porta lorem mollis. Ultrices dui sapien eget mi proin sed libero enim. Vitae sapien pellentesque habitant morbi tristique senectus et. A pellentesque sit amet porttitor eget dolor morbi non arcu. Amet porttitor eget dolor morbi non arcu risus quis. Suspendisse in est ante in nibh mauris cursus mattis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.`,
    summary: "They were nice"
  })

  await testPost.save();
  await testPost2.save();

  const testComment1 = new Comment({
    username: 'Test',
    message: 'Cool story bro',
    post: testPost
  })

  const testComment2 = new Comment({
    message: `Wow, that was really interesting`,
    post: testPost2
  })

  await testComment1.save();
  await testComment2.save();
}
