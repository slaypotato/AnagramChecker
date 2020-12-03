// anagram = elbow - below
// anagram  = listen - silent 
// !anagram = elbows - below (have more letters)
// !angram = listens - silent (have different amount of letters)
// anagram = conversation - voices rant on (ignore spaces)
// anagram = STATE - taste (ignore case)

import { expect } from "chai";
import { isAnagram } from "./anagram"

describe('Anagram checker - basic functionality',() => {
    it('return true if 2 words have the same word count', () => {
        const actual = isAnagram('elbow','below');
        expect(actual).to.true;
    })
    it('return false if one of the words have more letters',() => {
        const actual = isAnagram('elbows','below');
        expect(actual).to.false;
    })
    it('return false if one of the words have more letters',() => {
        const actual = isAnagram('below','elbows');
        expect(actual).to.false;
    })
    it('return false if the words have the same letters but different counts',() => {
        const actual = isAnagram('listens','silent');
        expect(actual).to.false;
    })
    it('ignore case of the words when comparing', () => {
        const actual = isAnagram('STATE','taste');
        expect(actual).to.true;
    })
    it('ignore all whitespaces from 2 words', () => {
        const actual = isAnagram('conversation','voices rant on');
        expect(actual).to.true;
    })
})