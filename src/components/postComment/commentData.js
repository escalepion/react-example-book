export const commentData = [
  { id:1, name: 'John Doe', date: 'February 13 2018', text: 'Lorem ipsun dolor', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 0 },
  { id:2, name: 'John Doe 2', date: 'February 13 2018', text: 'Comment 2', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 0 },
  { id:3, name: 'Children Doe 1', date: 'February 13 2018', text: 'Child Comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 1 },
  { id:4, name: 'Children Doe 2', date: 'February 13 2018', text: 'Child Comment 2', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 1 },
  { id:5, name: 'Subchild Doe', date: 'February 13 2018', text: 'Subchild comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 3 },
  { id:6, name: 'Descendant Doe', date: 'February 13 2018', text: 'Descendant comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', parent: 5 }
];

export const commentData2 = [
  { id: 1, name: 'John Doe', date: 'February 13 2018', text: 'Lorem ipsun dolor', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', children: [
    { id:3, name: 'Children Doe 1', date: 'February 13 2018', text: 'Child Comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', children: [
      { id:5, name: 'Subchild Doe', date: 'February 13 2018', text: 'Subchild comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png', children: [
        { id:6, name: 'Descendant Doe', date: 'February 13 2018', text: 'Descendant comment 1', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png' }
      ] }
    ] },  
    { id:4, name: 'Children Doe 2', date: 'February 13 2018', text: 'Child Comment 2', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png' }  
  ] },
  { id:2, name: 'John Doe 2', date: 'February 13 2018', text: 'Comment 2', imgSrc: 'https://www.w3schools.com/bootstrap4/img_avatar3.png' },
];