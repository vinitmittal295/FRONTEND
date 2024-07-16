// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     // Process the data according to the requirements
//     console.log(data);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     const titles = data.map(post => post.title);
//     console.log('Titles:', titles);
//   })
//   .catch(error => console.error('Error fetching data:', error));


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     const oddPosts = data.filter((_, index) => index % 2 === 0);
//     console.log('Odd Posts:', oddPosts);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     const multipleOfThreePosts = data.filter((_, index) => (index + 1) % 3 === 0);
//     console.log('Multiple of 3 Posts:', multipleOfThreePosts);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     const selectedFields = data.map(post => ({ userId: post.userId, title: post.title }));
//     console.log('Selected Fields:', selectedFields);
//   })
//   .catch(error => console.error('Error fetching data:', error));


// const person = {
//     name: 'Alice',
//     address: {
//       city: 'Wonderland',
//       zip: '12345'
//     }
//   };
  
//   const {
//     name,
//     address: { city, zip }
//   } = person;
//   console.log(name, city, zip); // Alice, Wonderland, 12345

// async function fetchAndProcessUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const fullAddressUsers = users.map(user => {
//       const { street, suite, city, zipcode } = user.address;
//       return `${street}, ${suite}, ${city}, ${zipcode}`;
//     });
//     console.log('Users with full address strings:', fullAddressUsers);

// }catch (error) {
//   console.error('Error fetching users:', error);
// }
// }
// fetchAndProcessUsers();


// async function vinit(){
// try{
//   const data=await fetch('https://jsonplaceholder.typicode.com/users');
//   const userdata=await data.json()
//   const south =userdata.filter(a=>a.address.city==="South Christy")
//   console.log(south)


// }
// catch(error){
//   console.log(error)
// }
// }
// vinit()

// async function vinit(){
//   const data=await fetch('https://jsonplaceholder.typicode.com/users')
//   const user=await data.json()
//   // console.log(user)
//   const a=[...user]
//   const b=user.splice(2,6)
//   console.log(b)
// }
// vinit()

// async function fetchAndProcessUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const [{ name: r}] = users;
//     console.log('First user name:', r);

// }

// catch (error) {
//   console.error('Error fetching users:', error);
// }
// }
// fetchAndProcessUsers()


// async function fetchAndProcessUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const first5Users = users.slice(0, 5);
//     console.log('First 5 users:', first5Users);

// }catch (error) {
//   console.error('Error fetching users:', error);
// }
// }
// fetchAndProcessUsers();

async function vinit(){
  const d=await fetch('https://jsonplaceholder.typicode.com/users')
  const e=await d.json()
  const f=e.filter(a=>a.address.zipcode==="92998-3874")
  .map(c=>c.email)
  console.log(f)
}
vinit()

