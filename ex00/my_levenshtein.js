const my_levenshtein = (str1,str2) =>{
    var count = 0;
    if (str1.length != str2.length) {
        return -1;
    }
    else if (str1.length == str2.length){
        for (let i = 0; i < str1.length; i ++){
            if (str1[i] != str2[i]) count++
        }
        return count++;
    }
}

my_levenshtein("GGACTGA","GGACTGA");
my_levenshtein("ACCAGGG","ACTATGG");
my_levenshtein( "GGACGGATTCTG","AGG");
my_levenshtein("","");