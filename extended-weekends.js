//Extended weekends
//If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

//In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

//- The first and last month in the range that has an extended weekend
//- The number of months that have extended weekends in the range, inclusive of start year and end year.
//For example:

//solve(2016,2020) = ["Jan","May",5]. //The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020
describe("Basic tests", function(){
Test.assertDeepEquals(solve(2016,2020),["Jan","May",5]);
Test.assertDeepEquals(solve(1900,1950),["Mar","Dec",51]);
Test.assertDeepEquals(solve(1800,2500),["Aug","Oct",702]);
});

function solve(a, b){
    let m = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
    let ct = 0, ans = [];
    for (let i = a; i <= b; ++i){
        let str = '';
        for (let j of m){
            str += j + " 1, " + i.toString();
            if (new Date(str).getDay() === 5) {
              ans.push(j);
              ct++;
              };
            str = '';
        }
    }
    return [ans[0], ans[ans.length-1],ct];
}
