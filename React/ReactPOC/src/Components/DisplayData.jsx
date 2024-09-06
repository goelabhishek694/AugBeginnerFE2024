import React from "react";

function DisplayData({ shoppingList, user }) {
  return (
    <div>
      {shoppingList}
      {/* <ul>
            <li>{shoppingList[0]}</li>
            <li>{shoppingList[1]}</li>
            <li>{shoppingList[2]}</li>
            <li>{shoppingList[3]}</li>
            <li>{shoppingList[4]}</li>
        </ul> */}
      {
        shoppingList.map((item) => {
          return <li>{item}</li>;
        })
      }
      {
      /* {["name","age"] */
        Object.keys(user).map(key=>(
          <>
            <p>{key}</p>
            <p>{user[key]}</p>
          </>
      ))
      }
    </div>
  );
}

export default DisplayData;
