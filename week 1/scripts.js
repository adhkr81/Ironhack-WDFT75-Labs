let Arr = [2, 100, "a", "b", "c", 2, 5, "a", 100]



function findUnique(wordsArr) {


    for (let word of wordsArr) {
      if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
        return word;
      }
    }
  }


  console.log(findUnique(Arr))