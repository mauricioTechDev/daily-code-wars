# The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

# ones_complement(1001) = 0110
# ones_complement(1001) = 0110
# For any given binary number,formatted as a string, return the Ones' Complement of that number.

def ones_complement(binary_number):
    ans = ''
    
    for char in binary_number:
        if char == '1':
            ans+='0'
        else:
            ans+='1'
            
    return ans
