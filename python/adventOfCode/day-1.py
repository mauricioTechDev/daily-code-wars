# Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.
#
# Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
#
# For example, suppose your expense report contained the following:
#
# 1721
# 979
# 366
# 299
# 675
# 1456
# In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
#
# Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

listNums = [1227,1065,329,1063,1889,1700,1805,1373,389,1263,1276,1136,1652,1981,1406,1249,1197,1379,1050,1791,1703,2001,1842,1707,1486,1204,1821,1807,1712,1871,1599,1390,1219,1612,1980,1857,1511,1702,1455,1303,1052,1754,1545,1488,1848,1236,1549,1887,1970,1123,1686,1404,1688,1106,1296,401,1829,1693,1389,1957,914,1176,1348,1275,1624,1401,1045,1396,1352,1569,1060,1235,1679,1503,1340,1872,1410,1077,958,1681,1189,1466,1087,1852,1293,1139,1300,1323,661,1388,1983,1325,1112,1774,1858,1785,1616,1255,1198,1354,1124,1834,1417,1918,1496,33,1150,1861,1172,2006,1199,1558,1919,1620,1613,1710,1477,1592,1709,1909,1670,1922,1840,1768,1982,1193,1736,1877,1770,1191,1433,1072,1148,1225,1147,1171,1424,1913,1228,1339,1814,1504,1251,1240,1272,1500,1927,1428,1641,1453,1729,1976,1808,1180,1024,1108,1085,1669,1636,1005,1520,1929,1626,1551,1234,1988,1256,1524,1571,1506,1977,1749,1408,1540,1934,1810,1328,1910,1478,1600,1699,1413,1446,1798,1013,1998,1661,1058,1051,1220,1447,1675,1912,1668,1932,1962,1055,1757,1116,1090]


def christmas(listNums):
    for firstNum in range(len(listNums)-1):
        for secondNum in range(len(listNums)-1):
            secondPointer = secondNum + 1
            if listNums[firstNum] + listNums[secondPointer] == 2020:
                sum = listNums[firstNum] * listNums[secondPointer]
                return sum
