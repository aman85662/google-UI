const student = ["aman","amit","ravi","santosh","sunny"]

const studentcontainer = document.getElementById('student-contain');

student.forEach((student)=>{
studentcontainer.innerHTML += `<div>${student}</div>` 

}) 
 
function renderStudent(student){
    studentcontainer.innerHTML = ` `;
    student.forEach((student)=>{
        studentcontainer.innerHTML += `<div>${student}</div>` 
    
    }) 
}
renderStudent(student);
function loadResult(){
const inputElement= document.getElementById('searchbar');
const Searchtext = inputElement.value.toLowerCase();
const filteredStudent = student.filter((student)=>{
    if(student.toLowerCase().includes(Searchtext)){
        return true;
    }
})
renderStudent(filteredStudent);
}
