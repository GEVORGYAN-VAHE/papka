

// let parent = document.querySelector('.d1')
// const x =new XMLHttpRequest()
// x.open('Get', 'https://reqres.in/api/users?page=2')
// x.onload = ()=>{
//     console.log(x.response);
//     if(x.readyState==4 && x.status==200){
//        let users = JSON.parse(x.response)
//        users.data.forEach(el=>{
//          let hr = document.createElement("h2")
//          hr.innerHTML=el.first_name
//          parent.append(hr)
//        } )
//     }
// }
// x.send()



let parent1 = document.querySelector('.d2')
const y =new XMLHttpRequest()
y.open('Get', 'https://jsonplaceholder.typicode.com/posts')

y.onload = ()=>{
    console.log(y.response);
    if(y.readyState==4 && y.status==200){
       let users = JSON.parse(y.response)
       console.log(users);
       users.forEach(el=>{
         let h3 = document.createElement("h3")
         h3.innerHTML=el.title
         parent1.append(h3)
       })
    }
}
y.send()
console.log("hello");