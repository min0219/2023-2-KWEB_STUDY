const factorial = n => {
    if (n==1) return 1;
    else return n * factorial(n-1);
};

const permutation = (n,r) => {
    return factorial(n) / factorial(n-r);
};

const combination = (n,r) => {
    return factorial(n) / (factorial(n-r) * factorial(r));
};

const multiPermutation = (n,r) => {
    if(r==0) return 1;
    else return n * multiPermutation(n, r-1);
};

const multiCombination = (n,r) => {
    return combination(n+r-1, r);
};

module.exports = {
    permutation : permutation,
    combination : combination,
    multiPermutation : multiPermutation,
    multiCombination : multiCombination,
};