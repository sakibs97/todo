let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let list = document.querySelector(".list")
let edithtml = document.querySelector(".edithtml")
let todo = []
let id;

btn.addEventListener("click",()=>{
    todo.push(input.value)
    addTodo()
    
})

edithtml.addEventListener("click",()=>{
    todo[id] = input.value
    addTodo()
})

function addTodo(){
    list.innerHTML = ""
    todo.map((item)=>{
        list.innerHTML += `<li>${item}<button class="up">Edit</button> <button class="del">Delete</button></li>`
        input.value = "" 
    })

    let delarr = document.querySelectorAll(".del")
    let upOne = document.querySelectorAll(".up")
    let delItem = Array.from(delarr)
    let uparr = Array.from(upOne)

    delItem.map((delinn,index)=>{
        delinn.addEventListener("click",()=>{
            todo.splice(index, 1)
            addTodo()
        })
    })
    uparr.map((upitem, index)=>{
        upitem.addEventListener("click",()=>{
            input.value = todo[index]
            id = index
        })
    })

}


