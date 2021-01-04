# Task
# Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

# Notes
# Array/list will contain positives only .
# Array/list will always has even size

Test.describe("Basic Tests")
Test.it("should return the minimum sum")
Test.assert_equals(min_sum([5,4,2,3]), 22)
Test.assert_equals(min_sum([12,6,10,26,3,24]), 342)
Test.assert_equals(min_sum([9,2,8,7,5,4,0,6]), 74)

def min_sum(arr):
    # Your code here
    arr.sort()
    print(arr)
    left, right, res = 0, len(arr) - 1, 0
    while left < right:
        res += arr[left] * arr[right]
        print(res)
        left += 1
        right -= 1
    return res

