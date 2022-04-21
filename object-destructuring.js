const personInfo = {id:1, name:'A', job:'graphic', salary:'$500', address:'Tangail', phone:'245536456'};
// console.log(personInfo.id, personInfo.name, personInfo.job, personInfo.salary);

// const id = personInfo.id;
// const name = personInfo.name;
// const job = personInfo.job;
// const salary = personInfo.salary;
// console.log(id, name, job, salary);

//Using Destructuring
// const {id, name, job, salary} = personInfo;
// console.log(id, name, job, salary);


const company = {
    id:1,
    name:'ABCD',
    ceo:{name:"karim", phone:'2453456', address:'Dhaka'},
    web:{work:'Website Development', employee:50, framework:'react',
        design:{
            first:'HTML5',
            second:'CSS3',
            third:'JS',
            fourth:'React'
    }},
    
}

//Using Destructuring
// const {id, name, ceo, web, design} = company;
// console.log(id, name, ceo, web, design);

const {name, phone, address} = company.ceo;
const {work, employee, framework, design} = company.web;
const {first, second, third, fourth} = company.web.design;
