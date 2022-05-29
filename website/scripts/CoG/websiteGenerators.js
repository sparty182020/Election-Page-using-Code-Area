// Disclamer Function for usage in special windows
/**
 * @param {String} disclamer Disclamer Reason
 * @returns {Boolean}
 */
 function disclamer(disclamer) {
    if (disclamer == null || disclamer == undefined) return;
    let reason;
    switch (disclamer) {
        case "ep":
            reason = "Epileptic Triggers including flashing lights"
            break;
        case "lag":
            reason = "Lag-causing function calls"
            break;
        case "bug":
            reason = "Buggy code and/or Beta pages"
            break;
        default:
            console.error(TypeError("Disclaimer Type isn't valid"))
            return;
    }
    const disclamerPrompt = confirm(
        `WARNING!
By opening this window type, you understand the fact that this may happen:
${reason}
To continue, press OK. Otherwise, press cancel`
    )
    return disclamerPrompt;
}

/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

/**
 * @description This function Generates a window using a required "version" value and an optional "width" and "height" value
 * @param {Number} version The window "version"
 * @param {Number | 300} width The width of the window
 * @param {Number | 300} height The height of the window
 * @returns {Window} Window Object
 * @author sparty182020
 */
async function genwin(version, width, height) {
    const varnum = 6
    version = parseInt(version)
    // Checks if the version is correct
    if (version <= 0 ||
        version > varnum
    ) {
        console.error(RangeError(`Bad Version\n\n Version must be between 0 and ${varnum}`))
        return;
    }
    if (isNaN(width)) {
        width = 300
    }
    if (isNaN(height)) {
        height = 300
    }
    var mindem = {
        1: [
            250,
            250
        ],
        2: [
            300,
            100
        ],
        3: [
            300,
            100
        ],
        4: [
            300,
            100
        ],
        5: [
            300,
            100
        ],
        6: [
            150,
            150
        ]
    }
    if (
        width < mindem[version][0] || // checks if the width is not valid
        height < mindem[version][1] // checks if the height is not valid
    ) {
        throw new RangeError("Dimensions value is invalid")
    }

    if (version == 1) {
        const ver = await disclamer('ep')
        if (!ver) {
            console.log('no consent');
            return;
        }
    }

    // Vars
    const nw = window.open('', '', `height:500,width:500`)
    nw.resizeTo(width, height)
    /**
    * @param {String} content Content of the window
    */
    const nwwrite = function (content) { nw.document.write(content) }
    const bodyareastyle = nw.document.body.style
    // Writes Styleing Function
    const writeStyles = function () {
        nwwrite('<br>')
        // DOM short vars
        const buttonElement = nw.document.createElement('button')
        buttonElement.innerText = "Press This Button To Close The Window"
        // Actual Styles
        bodyareastyle.fontFamily = 'Brush Script MT, cursive'
        buttonElement.style.background = 'linear-gradient(45deg,red,blue)'
        buttonElement.style.border = '0px solid transparent'
        buttonElement.style.borderRadius = '16px'
        buttonElement.style.padding = '16px'
        buttonElement.style.margin = '8px'
        buttonElement.style.position = 'fixed'
        buttonElement.style.left = `50%`
        buttonElement.style.top = '50%'
        buttonElement.style.transform = 'translate(-50%,-50%)'
        buttonElement.style.fontFamily = 'initial'
        buttonElement.onclick = function (e) { nw.close() }
        nw.document.body.insertAdjacentElement('afterbegin', buttonElement)
        const cStyle = nw.document.createElement('style')
        cStyle.innerHTML = `body > * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 32px;
    font-weight: bolder;
}`
        nw.document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend',cStyle)
    }
    // Finds the website version from list
    switch (version) {
        case 1:
            // 1 -> mouseMove Black and White Background Switch
            nwwrite('<p>Move Your Mouse</p>')
            const baw = function () {
                if (nw.document.body.style.backgroundColor == 'black') {
                    nw.document.body.style.backgroundColor = 'white'
                    nw.document.body.style.color = 'black'
                } else {
                    nw.document.body.style.backgroundColor = 'black'
                    nw.document.body.style.color = 'white'
                }
            }
            nw.document.onmousemove = (e) => baw()
            break
        case 2:
            // 2 -> Click Counter
            nwwrite('<p id=\'counter\'>Counter = 0</h1>')
            let i = 0
            function incr() {
                i++
                return i
            }
            nw.document.onclick = function () {
                const counter = incr()
                nw.document.getElementById('counter')
                    .innerText = `Counter = ${counter}`;
            }
            break;
        case 3:
            // 3 -> Random Number
            const randnum = function () {
                const num = Math.round(
                    Math.random() * Math.pow(10, 6)
                );
                return num
            }
            nwwrite(`<p>Your Number is: ${randnum()}</p>`)
            break;
        case 4:
            // 4 -> Random Name
            const randname = function () {
                let name = ''
                const letters = Math.floor(
                    Math.random() * 5
                ) + 3;
                for (let i = 0; i < letters; i++) {
                    const lettergen = (
                        Math.floor(
                            Math.random() * 22
                        ) + 10
                    ).toString(32);
                    name += lettergen;
                }
                return name;
            }
            nwwrite(`<p>Your name is: ${randname()}</p>`);
            break;
        case 5:
            // 5 -> Random Color
            const hgen = function () {
                const hex = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`;
                return hex;
            }
            const thex = hgen();
            nwwrite(`<p></p>`);
            nw.document.body.style.background = thex;
            break;
        case 6:
            // 6 -> Blank
            const fillerEle = nw.document.createElement('p')
            fillerEle.innerText = "&#8203;"
            nw.document.body.insertAdjacentElement('afterbegin', fillerEle)
            break;
        default:
            throw new RangeError('Bad Version, but in the switch case statement');
    }
    // Writes The Styles
    writeStyles()
}