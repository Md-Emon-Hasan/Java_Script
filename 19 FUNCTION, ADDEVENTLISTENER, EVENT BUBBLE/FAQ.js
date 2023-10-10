//basic for loop er bebohar
nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
};

nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num * 2);
};

//odd ebong even number check korar upay
nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
        console.log(num, ": is even number");
    } else {
        console.log(num, ": is odd number");
    }
};

//duita loop ke akshate output pawar khetre
function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": is even number");
    } else {
        console.log(num, ": is odd number");
    }
}
nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);
};
friends_age = [13, 17, 19, 20, 18,];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age);
};

