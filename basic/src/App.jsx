import React from 'react'

function App() {
  //javascript work
  let name = "sourav";
  let age = 20;
  let course = "Mern Stack"

  let price = 10000
  let qty = 5

  let total = price * qty;

  let marks = 44;
  let res;

  if (marks >= 40) {
    res = "pass"
  } else {
    res = "Fail"
  }

  function a() {
    return "welcome to india";
  }
  function ct(p, q) {
    return p * q;
  }

  //arrow function
  const add = (x, y) => x + y;
  //msg print arrow function
  const msg = k => "hi how r u?...."
  // array

  let players = ["virat", "rohit", "msd"];
  //NESTED IF

  let ages = 25;
  let gid = true;
  let msag = "";
  let eticket = true;
  let message = "access denied";



  if (ages >= 18) {
    if (gid === true) {
      msag = "allowed for vote"
    } else {
      msag = "gid required"
    }
  } else {
    msag = "not allow for vote"
  }


  //&& condition

  if (age >= 18 && eticket === true) {
    message = "allow for event";
  }

  //or condition
  let isadmin = false;
  let ismanager = false;

  let output = "";

  if (isadmin || ismanager) {
    output = "access done"
  } else {
    output = "not access"
  }

  //&& conditional rendering

  let subadmin = false;

  //&& multiple condition

  let auser = true;
  let buser = true;
  let cuser = true;

  //swich case 

  let role = "ca";
  let msgg;

  switch(role){
    case "admin":
        msgg = "admin access";
        break;
     
         case "manager":
        msgg = "manager access";
        break;

         case "user":
        msgg = "user access";
        break;

        default:
          msgg="unkown role";
  }




  return <>
    {/* html work */}
    <div className='x'>
      <h1>students info</h1>
      <p>name: {name} Age: {age}  Course:{course}</p>
      <p>total price: ${total}</p>
      <p>Marks: {marks}</p>
      <p>Result: {res}</p>
      <p> {age >= 18 ? "you are add" : "not add"}</p>
      <p>{a()}</p>
      <p>total : ₹{ct(500, 8)}</p>
      <p>add:{add(7, 8)}</p>
      <p>message: {msg()}</p>
      <p>{players.map(y => (
        <p>{y}</p>
      ))}</p>

      <p>
        {msag}
      </p>
      <p>
        <h1>Event entry:</h1>
        <p>{message}</p>
      </p>
      <div>
        <h1>admin panel</h1>
        <p>{output}</p>
      </div>

      <p>
        <h1>subadmin panel</h1>
        {
          subadmin && (
            <button>admin panel</button>
          )
        }
      </p>
      <p>
        <h1>dashboard</h1>
        {auser && <h1>welcome auser</h1>}
        {buser && <h1>welcome buser</h1>}
        {cuser && <h1>welcome cuser</h1>}
      </p>

     <p>{msgg}</p>
    </div>




  </>
}

export default App