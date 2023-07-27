// 1.1 Is Unique: Implement an algo to see if all characters in a string are unique.

// First assumption:  a string with 'aA' would not be unique since they are both the letter 'a'

// One way to do this in JS is to sort and then go through and look at each element and subsequent element
// If any are equal it is not unique

let isUniqueSort = function (s) {
  let letters = s.toLowerCase().split("").sort();
  for (i = 0; i < letters.length - 1; i++) {
    if (letters[i] == letters[i + 1]) {
      return false;
    }
  }
  return true;
};

// Another way to do it would be to build a hash table with all seen elements. If any items

let isUniqueHash = function (s) {
  let lettersSeen = {};
  for (let i = 0; i < s.length; i++) {
    if (lettersSeen.hasOwnProperty(s[i].toLowerCase())) {
      return false;
    } else {
      lettersSeen[s[i].toLowerCase()] = true;
    }
  }
  return true;
};

//1.2
// Check Permutation: Given two strings, write a method to determine if one is a permutation of another
// Similar to previous problem, we will 'sort' both strings and compare.
// Don't assume a === A

let isPermutation = function (s1, s2) {
  let s1Sorted = s1.split("").sort().join("");
  let s2Sorted = s2.split("").sort().join("");

  return s1Sorted == s2Sorted;
};

//1.3 URLify - Replace spaces with %20 // probably harder in other langauges
let URLify = function (s1) {
  return s1.replaceAll(" ", "%20");
};

//1.4 Palindrome Permutation - check to see if something is a permuation to a palindrome
// The 'trick' to this one is to realize that anything can be a palindrome if it has a maximum of 1 odd numbered elements - ie ee and iii _or_ ee and i _o_r ee and iiiii

let isPalindromePermutation = function (s) {
  let lettersSeen = {};
  for (let i = 0; i < s.length; i++) {
    if (lettersSeen.hasOwnProperty(s[i].toLowerCase())) {
      lettersSeen[s[i].toLowerCase()] = lettersSeen[s[i].toLowerCase()] + 1;
    } else {
      lettersSeen[s[i].toLowerCase()] = 1;
    }
  }
  let oddSeen = false;
  console.log("LS", lettersSeen);
  for (const timesSeen in lettersSeen) {
    console.log("TS", timesSeen);
    if (lettersSeen[timesSeen] % 2 !== 0) {
      if (oddSeen) {
        return false;
      }
      oddSeen = true;
    }
  }
  return true;
};

// 1.5 One Away -

// 1.6
