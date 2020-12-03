// anagram = elbow - below
// anagram  = listen - silent 
// !anagram = elbows - below (have more letters)
// !angram = listens - silent (have different amount of letters)
// anagram = conversation - voices rant on (ignore spaces)
// anagram = STATE - taste (ignore case)

import { getLetterCount } from './letter-count';

export const isAnagram = (word1, word2) => {
    const count1 = getLetterCount(word1.toString());
    const count2 = getLetterCount(word2.toString());
    const sorted1 = Object.entries(count1).sort();
    const sorted2 = Object.entries(count2).sort();
    return JSON.stringify(sorted1) == JSON.stringify(sorted2);
    
}