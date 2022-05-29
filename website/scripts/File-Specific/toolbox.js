// Functions

// Classes
class Util {
    static getTime() {
        const datemod = new Date()
        const time = datemod.toLocaleTimeString(
            'en-US',
            {
                timeZone: 'EST'
            }
        )
        return time
    }
    static getDate() {
        const datemod = new Date();
        const date = datemod.toLocaleDateString(
            'en-US',
            {
                timeZone: 'EST',
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            }
        )
        return date;
    }
    static getFullDate() {
        const date = this.getDate()
        const time = this.getTime()
        return `${date} ${time}`
    }
    static writeClipboard(index) {
        const writeables = [
            "to",
            "",
            "",
            "",
            ""
        ]
        if (index > writeables.length) {
            return new Error("Failed To Write: Invalid Index")
        } else {
            return navigator.clipboard.writeText(writeables[index - 1])
        }
    }
}