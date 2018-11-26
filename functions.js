const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Sheldrick'};
        user['lastName'] = 'Mayrant';
        return user;
    }
}

module.exports = functions;