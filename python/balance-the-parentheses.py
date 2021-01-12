# Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

# The input will be a string of varying length, only containing '(' and/or ')'.

# For example:

# Input: ")("
# Output: "()()"

# Input: "))))(()("
# Output: "(((())))(()())"

def fix_parentheses(strng):
    opening = []
    closing = []
    for ch in strng:
        if ch == ')':
            if any(closing):
                closing.pop()
            else:
                opening.append('(')
        else:
            closing.append(')')
    return  "".join(opening) + strng + "".join(closing)
