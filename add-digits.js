Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?




var addDigits = function(num) {
        let currSum = 0;
        while (num > 9) {
            const stringNum = num.toString();
            for (const digit of stringNum) {
                currSum += parseInt(digit);
            }
            num = currSum;
            currSum = 0;
        }
        return num;
};
