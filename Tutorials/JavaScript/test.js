const posts = [
  {
    id: 1,
    views: 200,
    title: 'My First Post',
    datetime: 'July 01, 2021 11:17:36 AM',
    img: 'https://images.pexels.com/photos/4113837/pexels-photo-4113837.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
  },
  {
    id: 2,
    views: 400,
    title: 'My 2nd Post',
    datetime: 'July 01, 2021 11:17:36 AM',
    img: 'https://images.pexels.com/photos/12896240/pexels-photo-12896240.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
  },
  {
    id: 3,
    views: 100,
    title: 'My 3rd Post',
    datetime: 'July 01, 2021 11:17:36 AM',
    img: 'https://images.pexels.com/photos/12858127/pexels-photo-12858127.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
  },
  {
    id: 4,
    views: 500,
    title: 'My Fourth Post',
    datetime: 'July 01, 2021 11:17:36 AM',
    img: 'https://images.pexels.com/photos/12292899/pexels-photo-12292899.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
  },
];

/* const postMap = new Map();
posts.forEach((post) => postMap.set(post));
const viewsOrder = [...postMap.entries()]
  .sort((a, b) => b[0].views - a[0].views)
  .map((post) => post[0]);

console.log(viewsOrder[0].id);
console.log(viewsOrder[0].views);
console.log(viewsOrder[0].title);
console.log(viewsOrder[0].datetime);
console.log(viewsOrder[0].img); */

/* const handleEdit = (id) => {
  const post = posts.find((post) => post.id.toString() === id);
  const views = post.views;
  console.log(views);
};

handleEdit('1'); */

const idArr = new Array();
const viewsArr = new Array();
// console.log(arr);
const post = posts.forEach(
  (post) => idArr.push(post.id),
  viewsArr.push(post.views)
);

console.log(arr);

for (const item of arr) {
  console.log(item);
  // console.log(item[0]);
  // console.log(item[1]);
}
