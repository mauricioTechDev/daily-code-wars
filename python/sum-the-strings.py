#   Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sum_str("4", "5")    # should output "9"
  sum_str("34", "5")   # should output "39"
# If either input is an empty string, consider it as zero.


def sum_str(a, b):
    # happy coding !
    if b == '' and a == '':
        return '0'
    elif b == '':
        return a
    elif a == '':
        return b
    else:
        ans = int(a) + int(b)
        return str(ans)


