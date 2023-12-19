let checkNumber = [118, 16, 80, 151, 47, 38, 95, 142, 68, 61, 34, 151, 20, 17, 56, 31, 100, 106, 5, 130, 74, 97, 28, 199, 91, 127, 73, 112, 92, 106, 127, 71, 26, 115, 178];

const check3 = (pet) => {
    let teilRechner = pet.map(teil3 => {
        if (teil3 % 3 === 0) {
            return teil3 + 100;
        } else {
            return teil3;
        }
    });

    console.log(teilRechner);
}

check3(checkNumber);

/*
(35) [118, 16, 80, 151, 47, 38, 95, 142, 68, 61, 34, 151, 20, 17, 56, 31, 100, 106, 5, 130, 74, 97, 28, 199, 91, 127, 73, 112, 92, 106, 127, 71, 26, 115, 178]
0
: 
118
1
: 
16
2
: 
80
3
: 
151
4
: 
47
5
: 
38
6
: 
95
7
: 
142
8
: 
68
9
: 
61
10
: 
34
11
: 
151
12
: 
20
13
: 
17
14
: 
56
15
: 
31
16
: 
100
17
: 
106
18
: 
5
19
: 
130
20
: 
74
21
: 
97
22
: 
28
23
: 
199
24
: 
91
25
: 
127
26
: 
73
27
: 
112
28
: 
92
29
: 
106
30
: 
127
31
: 
71
32
: 
26
33
: 
115
34
: 
178
length
: 
35
[[Prototype]]
: 
Array(0)
*/