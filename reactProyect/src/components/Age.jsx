function Age(props) {
    let condition = props.condition;
    let age = props.age;
    let message = props.messageAge;
  
    if (!condition) {
      return message + age;
    } else if (condition === "mayor de edad") {
      if (age >= 18) {
        return message + age;
      }
    } else if (condition === "edad") {
      if (age) {
        return message + age;
      }
    } else if (condition === "edad entre 18 y 65") {
      if (age >= 18 && age <= 65) {
        return message;
      }
    } else if (condition === "john") {
     if (props.name ==="John" && age >= 18 && age <= 65) {
        return message;
        }
    }
  
    return null; 
  }
  
  export default Age;