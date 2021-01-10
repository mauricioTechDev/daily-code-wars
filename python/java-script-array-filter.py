# In Python, there is a built-in filter function that operates similarly to JS's filter. For more information on how to use this function, visit https://docs.python.org/3/library/functions.html#filter

# The solution would work like the following:

# get_even_numbers([2,4,5,6]) => [2,4,6]

def check_even(number):
    if (number % 2) == 0:
        return True
    return False

def get_even_numbers(arr):
    return list(filter(check_even, arr))
