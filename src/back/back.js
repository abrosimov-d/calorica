export default class Back {
    constructor() {
        
    }
    
    randomWord() {
        let result = '';
        let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');
        let random = Math.floor(Math.random() * lorem.length);
        console.log(random)
        return lorem[random];
    }

    request(date) {
        let result = []
        for (let i = 0; i < 100; i++) {
            result.push(this.randomWord());
        }
        console.log(result)
        return result;
    }
}