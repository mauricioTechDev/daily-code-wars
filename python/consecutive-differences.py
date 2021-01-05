# Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

# The list will only contain integers, and will not be empty.

# For example:

# differences([1, 2, 3]) => [1, 1] => [0] => 0
# differences([1, 5, 2, 7, 8, 9, 0]) => [4, 3, 5, 1, 1, 9] => [1, 2, 4, 0, 8] => ... => 1
# differences([2, 3, 1]) => [1, 2] => 1


def differences(lst):
    secondLst = list()
    
    while len(lst) > 1:
        for el in range(len(lst)-1):
            diff = lst[el] - lst[el+1]
            if diff < 0:
                diff = -1 * diff
            secondLst.append(diff)
        lst = secondLst
        secondLst = list()
    return lst[0]
        
