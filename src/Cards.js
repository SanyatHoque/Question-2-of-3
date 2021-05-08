
function Cards({amount}) {
  const x = amount;
  const arr = Array.from(Array(x).keys())
  console.log('debug',arr,x)
  const tdclick =(idx) =>{
        var tab = document.getElementById("table"),
        tr = tab.getElementsByTagName("tr")[0];
        // tr.getElementsByTagName("td")[idx].innerHTML ="<td>" +"Y"+ "</td>";
        console.log("clicked",idx,tab,tr)
        for (let i=0;i<=arr.length-1;i++) {
            if (i!==idx) {
            tr.getElementsByTagName("td")[i].innerHTML ="<td>" +"Down"+ "</td>"; 
            } else if (i===idx) {
                tr.getElementsByTagName("td")[i].innerHTML ="<td>" +"Up"+ "</td>"; 
                }
        }
            
  }
  return(
    <table id='table'>
      <tbody>
        <tr>
          {arr.map((x1,idx)=>{
                return(
                <td key={idx} onClick={()=>tdclick(idx)}> 
                    Down
                </td>
                )

          })}
          
        </tr>
      </tbody>
    </table>
  )
}

export default Cards;