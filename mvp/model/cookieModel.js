class CookieModel {
    constructor() {
        this.CookieCount = 0;
    }

    addCookie() {
        this.CookieCount++;
    }

    getCookieCount() {
        return this.CookieCount;
    }
}