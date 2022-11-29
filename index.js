function superbowlWin(record){
    const result = record.find((recordCheck) => recordCheck.result==="W");
    if (result){
    return result.year;
    } 
}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];
  



  
