function fixedRedir(file, go) {
    try {
        go = Boolean(go)
    } catch (err) {
        console.error("An error was thrown: " + err)
    }
        const splittedHref = location.href.split('/')
        const curFile = splittedHref[splittedHref.length - 1]
        const removedFileHref = location.href.replace(curFile, '')
        const fixedHref = removedFileHref + `${file}`
        if (go == true) {
            location.href = fixedHref
            return
        } else {
            return fixedHref
        }
}

async function redir() {
    document.getElementById("redir").innerText = 'Redirecting...'
    location.href = fixedRedir('html/index.html',false)
}

async function sessionSetup() {
    localStorage.setItem('LocalUUID',crypto.randomUUID())
    sessionStorage.setItem('SessionStart',Date.now())
}

setTimeout(_ => {sessionSetup();redir()},1500)
