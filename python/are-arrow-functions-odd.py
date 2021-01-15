# Time to test your basic knowledge in functions! Return the odds from a list:

# odds([1,2,3,4,5]) => [1,3,5]

# @test.describe("Fixed Tests")
# def fixed_tests():
#     @test.it("Basic Tests")
#     def basic_tests():
#         test.assert_equals(odds([]), [])
#         test.assert_equals(odds([2,4,6]), [])
#         test.assert_equals(odds([1,3,5]), [1,3,5])
#         test.assert_equals(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5])


def odds(values):
    return [num for num in values if num % 2 != 0]
