import axios from "axios";

export default async function search(searchObj, setTablesList) {
  const queriesArr = [
    "user_id = ",
    "sum = ",
    "sum > ",
    "sum < ",
    "interest_percent = ",
  ];

  
  const data = { queriesArr: queriesArr, searchObj:  searchObj  };

  const res = await axios.post("http://localhost:4000/admin/loans", data);
  console.log(res.data, 'resdata');
  if(res.data.length > 0){
   
    setTablesList(res.data)}
  
}
