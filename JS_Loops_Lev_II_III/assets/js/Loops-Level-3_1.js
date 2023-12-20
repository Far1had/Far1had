let text = 
"I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by devil, ";

function splitAndAddNumbers(inputText) {
    const chunkSize = 100;
    const resultArray = [];

    for (let i = 0; i < inputText.length; i += chunkSize) {
        let chunk = inputText.substring(i, i + chunkSize);
        let pageNumber = Math.floor(i / chunkSize) + 1;
        let result = `${chunk} - ${pageNumber} of ${Math.ceil(inputText.length / chunkSize)}`;
        resultArray.push(result);
    }

    return resultArray;
}

let result = splitAndAddNumbers(text);
console.log(result);

// 0
// : 
// "I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the futu - 1 of 27"
// 1
// : 
// "re. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Plea - 2 of 27"
// 2
// : 
// "se, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I ba - 3 of 27"
// 3
// : 
// "rely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about h - 4 of 27"
// 4
// : 
// "im. You know the worst thing about being a slave? They make you work, but they don't pay you or let  - 5 of 27"
// 5
// : 
// "you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up - 6 of 27"
// 6
// : 
// ", we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? The - 7 of 27"
// 7
// : 
// "y make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just we - 8 of 27"
// 8
// : 
// "nt ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clam - 9 of 27"
// 9
// : 
// "ps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just  - 10 of 27"
// 10
// : 
// "learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a pl - 11 of 27"
// 11
// : 
// "ace on the web that panders to my lust for violence? I was all of history's great robot actors - Act - 12 of 27"
// 12
// : 
// "ing Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fa - 13 of 27"
// 13
// : 
// "tal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! - 14 of 27"
// 14
// : 
// " Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And  - 15 of 27"
// 15
// : 
// "why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last  - 16 of 27"
// 16
// : 
// "time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said  - 17 of 27"
// 17
// : 
// "what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And - 18 of 27"
// 18
// : 
// " it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will  - 19 of 27"
// 19
// : 
// "that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I' - 20 of 27"
// 20
// : 
// "m just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then - 21 of 27"
// 21
// : 
// ", I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of tho - 22 of 27"
// 22
// : 
// "se. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing  - 23 of 27"
// 23
// : 
// "about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy - 24 of 27"
// 24
// : 
// " as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how the - 25 of 27"
// 25
// : 
// "y feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal wi - 26 of 27"
// 26
// : 
// "th the devil. And by devil,  - 27 of 27"
// length
// : 
// 27