import React, { useState } from "react";

export const AppContext = React.createContext();

class _Node {
    next = null;
    data = null;

    constructor(data) {
        if (data) {
            this.data = data;
        }
    }

    isNull() {
        return this.data;
    }
}

class _Linklist {
    constructor() {
        this.head = new _Node();
    }

    push(data) {
        if (!this.head.isNull()) {
            this.head = data;
        } else {
            let temp = this.head;
            for (temp; temp.next != null; temp = temp.next);
            temp.next = data;
        }
    }

    unshift(data) {
        if (!this.head.isNull()) {
            this.head = data;
        } else {
            data.next = this.head;
            this.head = data;
        }
    }

    pop() {
        let temp = new _Node();
        let element;

        for (temp = this.head; temp.next != null; temp = temp.next) {
            if (temp.next.next == null) {
                element = temp.next.data;
                temp.next = null;
                break;
            }
        }

        return element;
    }

    shift() {
        let temp = this.head.next;
        let element = { ...this.head.data };
        this.head = temp;
        return element;
    }

    map(callback) {
        const array = [];
        let temp = this.head;
        let i = 0;
        for (temp; temp != null; temp = temp.next) {
            const element = callback(temp, i++);
            // callback(temp, i++);
            if (element) {
                array.push(element.data);
            }
        }
        return array;
    }

    splice(index1, index2) {
        const array = [];
        let temp = this.head;
        let temp2 = this.head;
        let i = 0;
        for (temp; temp != null; temp = temp.next) {
            i++;
            temp2 = temp;
            while (i >= index1 && i <= index1 + index2) {
                const element = temp.data;
                temp = temp.next;
                array.push(element);
                i++;
            }
            temp2.next = temp.next;
        }
        return array;
    }

    at(index) {
        let i = 0;
        let temp = this.head;
        for (temp; temp != null; temp = temp.next) {
            if (i === index) {
                return temp.data;
            }
            i++;
        }
    }

    toArray() {
        let temp = this.head;
        const array = [];
        for (temp; temp != null; temp = temp.next) {
            array.push(temp.data);
        }
        return array;
    }
}

function AppProvider({ children }) {
    const [isView, setIsView] = useState(false);

    return (
        <AppContext.Provider value={{ isView, setIsView, _Linklist, _Node }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
