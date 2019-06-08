class View {
    constructor(DOM, presenter) {
        this.presenter = presenter;
        this.DOM = DOM;
        this.DOM
            .getElementById("grabCookie")
            .addEventListener("click", toGrabCookie);

        let self = this;

        // Event Handler
        function toGrabCookie() {
            self.presenter.toGrabCookie();
        }
    }

    // DOM Manipulation
    toSetCookieCount(cookieCount) {
        this.DOM.getElementById("cookieCount").innerHTML = cookieCount;
    }
}