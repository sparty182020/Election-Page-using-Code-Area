/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

function cdnGen(user,repo,file,ext) {
    if (user == 1 ) {
        const cdnurl = `https://cdn.jsdelivr.net/gh/sparty182020/${repo}/${file}.${ext}`
        return cdnurl
    } else {
        const cdnurl = `https://cdn.jsdelivr.net/gh/${user}/${repo}/${file}.${ext}`
        return cdnurl
    }
}