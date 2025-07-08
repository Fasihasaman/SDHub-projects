const unorderlist=document.createElement('ul')
let title=document.createElement('h2')
title.textContent="Unorder-list"
document.body.append(title)
unorderlist.innerHTML="<li>department-1</li> <li>department-2</li> <li>department-3</li> <li>department-4</li>"
document.body.append(unorderlist)

const orderlist=document.querySelector('#order')
orderlist.innerHTML="<li>department1</li> <li>department1</li> <li>department1</li> <li>department1</li>"

const array=[0,1,2,3,5]

for (let index = 0; index < array.length; index++) {

    
let list=document.createElement('li')
list.textContent=array[index]
document.body.append(list)
}




let list2=['apple','grapes','orange','banana','guava']

const order=document.createElement('ol')
for (let i=0; i<list2.length; i++){
let orderlist2=document.createElement('li')
    
   orderlist2.textContent=list2[i]
   order.append(orderlist2)
}
document.body.append(order)

const unorder=document.querySelector('#unorder')
for (let i=0; i<list2.length; i++){
let orderlist2=document.createElement('li')
    
   orderlist2.textContent=list2[i]
   unorder.append(orderlist2)
}
document.body.append(unorder)
unorder.classList.add('bg-teal-900', 'font-bold', 'text-white')