
function function2(skills){
    const [a,b,c]=skills
    console.log(a)
    console.log(b)
    console.log(c)
}
const data = {
    skills:["java", "python","cpp"]
  };

  function add({skills}) {
    function2(skills)
  }
  add(data);



  
  